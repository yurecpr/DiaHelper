interface User {
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
export default User  