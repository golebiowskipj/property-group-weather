import { ExternalLinks } from "../common/externalLinks";

// TODO: INTERFACE FOR API RESPONSE - should not be any type
export const getWeatherForCity = (city: string): any => {
    const response = fetch(`${commonUrl.concat(city)}`, fetchParams())
        // TODO: ERROR HANDLING, TYPES FOR RESPONSES
        .catch(error => error)
        .then((res: any) => res.json())
        .then((res: any) => res)
    return response;
}

// Due to the fact that API I have choosen dosen't have location randomize method, I always compare weather to Warsaw. If users wants to know the weather in Warsaw - I compare to Cracow.
export const getCompareWeather = (city: string): any => {
    const response = fetch(`${commonUrl.concat(compareTo(city))}`, fetchParams())
        // TODO: ERROR HANDLING, TYPES FOR RESPONSES
        .catch(error => error)
        .then((res: any) => res.json())
        .then((res: any) => res)
    return response;
}

// =================
const commonUrl = `${ExternalLinks.proxy}/${ExternalLinks.api}/current?access_key=${process.env.REACT_APP_API_KEY}&query=`;

const fetchParams = () => {
    return {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }
}

const compareTo = (city: string): string => {
    let toCompare: string = 'warsaw';

    switch (city.toLowerCase()) {
        case 'warsaw' || 'warszawa':
            toCompare = 'Cracow';
            break;
        case 'cracow' || 'krakow' || 'kraków':
            toCompare = 'Warsaw';
            break;
    }

    return toCompare;
}







