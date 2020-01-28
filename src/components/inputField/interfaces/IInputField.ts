export interface IInputField {
    name: string;
    type: string;
    value?: string | number;
    label?: string;
    placeholder?: string;
    width?: string;
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    hasErrors: boolean;
}