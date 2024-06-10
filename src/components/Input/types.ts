type InputType = "button" | "checkbox" | "email" | "number" | "password" | "radio" | "reset" | "search" | "tel" | "text" | "time" | undefined;
import { ChangeEvent } from "react";

export interface InputProps {
    name: string | number,
    type?: InputType,
    placeholder: string,
    label?:string,
    onInputChange?: (event:ChangeEvent<HTMLInputElement>) => void,
    value: string | number,
    error?: string | undefined,
}