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
    GLUCOSE_LEVEL = 'glucoseLevel',
    AGE = 'age',
    WEIGHT = 'weight',
    HEIGHT ='height',
    
}
