export interface IWeatherDisplayProps {
    loading: boolean;
    city: string;
    description: string;
    temperature?: number;
    feelslike?: number;
    icon: string;
}