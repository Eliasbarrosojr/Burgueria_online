import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  ILoginForm,
  IProducts,
  IProviderProps,
  IRegisterUser,
  IUser,
  IUserContext,
} from './type';
import Api from '../../services/Api';

export const UserContext = createContext({} as IUserContext);

export const UserContextProvider = ({ children }: IProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [products, setProducts] = useState([] as IProducts[]);
  const [openCart, setOpenCart] = useState(true);

  const navigate = useNavigate();

  async function getProducts() {
    const token = localStorage.getItem('@TOKEN');
    if (token) {
      const tokenUser = JSON.parse(token);
      try {
        const response = await Api.get('/products', {
          headers: {
            Authorization: `Bearer ${tokenUser}`,
          },
        });
        setProducts(response.data);
        navigate('/shop');
      } catch (error) {
        navigate('/');
      }
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  async function Login(data: ILoginForm) {
    try {
      const response = await Api.post('/login', data);
      localStorage.setItem('@TOKEN', JSON.stringify(response.data.accessToken));
      toast.success('Logado');
      setUser(response.data.user);
      navigate('/shop');
    } catch (errors) {
      toast.error('Ops, algo deu errado');
    }
  }

  async function CreateUser(formData: IRegisterUser) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await Api.post('/users', formData);
      toast.success('Conta criada com sucesso');
      navigate('/');
    } catch (errors) {
      toast.error('Ops, algo deu errado');
    }
  }

  function Logout() {
    localStorage.clear();
    setUser(null);
    navigate('/');
  }
  return (
    <UserContext.Provider
      value={{
        Login,
        CreateUser,
        Logout,
        user,
        setUser,
        openCart,
        setOpenCart,
        products,
        setProducts,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
