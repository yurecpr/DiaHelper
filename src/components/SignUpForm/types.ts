export interface SignUpValues {
    firstName: string,
    secondName: string,
    email: string,
    password:string,
    confirmPassword: string
}
export enum SIGN_UP_FIELD_NAMES {
    FIRST_NAME = 'firstName',
    SECOND_NAME = 'secondName',
    EMAIL = 'email',
    PASSWORD = 'password',
    CONFIRM_PASSWORD = 'confirmPassword'
}