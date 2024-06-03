export default interface UserValues {
    id: number;
    password: string;
    role: {
      id: number;
      title: string;
    };
    email: string;
    glucoseLevel: number;
    weight: number;
    height: number;
    age: number;
    name: string;
    active: boolean;
  }

  export enum USER_DATA_FORM_FIELD_NAMES {
    FIRST_NAME = 'name',
    EMAIL = 'email',
    PASSWORD = 'password',
    GLUCOSE_LEVEL = 'glucoseLevel',
    WEIGHT = 'weight',
    HEIGHT ='height',
    AGE = 'age',
}
