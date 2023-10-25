export interface IProviderProps {
  children: React.ReactNode;
}
export interface IUser {
  email: string;
  name: string;
  id: number;
}
export interface ILoginForm {
  email: string;
  password: string;
}
export interface IRegisterForm {
  email: string;
  password: string;
  confirmpassword: string;
  name: string;
}

export interface IProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export type IRegisterUser = Omit<IRegisterForm, 'confirmpassword'>;

export interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  CreateUser: (formData: IRegisterForm) => Promise<void>;
  Login: (data: ILoginForm) => Promise<void>;
  Logout: () => void;
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
  products: IProducts[];
  setProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
}
