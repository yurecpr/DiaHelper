export interface SignUpValues {
    firstName: string,
    surname: string,
    email: string,
    password:string,
    confirmPassword: string
}
export enum SIGN_UP_FIELD_NAMES {
    FIRST_NAME = 'firstName',
    SURNAME = 'surname',
    EMAIL = 'email',
    PASSWORD = 'password',
    CONFIRM_PASSWORD = 'confirmPassword'
}