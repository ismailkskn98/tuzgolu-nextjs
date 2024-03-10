export type InitialValues = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
};

export type FormItem = {
  id: string;
  name: string;
  label: string;
  type: string;
};

export type Product = {
  id: string | number;
  name: string;
  images: string[];
};
