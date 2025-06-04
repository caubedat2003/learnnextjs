// types.ts
export interface Product {
  id: string;
  name: string;
  importDate: Date;
  status: string;
  price: number;
}

export interface FormDataType {
  info: {
    id: string;
    username: string;
    password: string;
    phone: string;
    email: string;
    birthDate: string; // ISO string, ví dụ "1990-05-15"
    gender: "Nam" | "Nữ" | "Khác";
  };
  orther: {
    bio: string;
    exampleDate: string; // ISO string
    weight: number;
    month: string; // "01" đến "12"
    year: string; // "2025" …
    description: string;
    groupOptions: string[]; // ["a","c"] 
    emailNotifications: boolean;
  };
  products: Array<{
    id: string;
    name: string;
    importDate: Date;
    status: string;
    price: number;
  }>;
}
