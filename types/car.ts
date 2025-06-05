export type Product = {
  id: string;
  name: string;
  importDate: string;
  status: string;
  price: number;
};

export type UserInfo = {
  id: string;
  username: string;
  password: string;
  phone: string;
  email: string;
  birthDate?: string;
  gender?: "1" | "2" | "3";
};

export type Orther = {
  bio?: string;
  exampleDate?: string;
  weight: number;
  month: string;
  year: string;
  description: string;
  groupOptions: string[];
  emailNotifications: boolean;
};