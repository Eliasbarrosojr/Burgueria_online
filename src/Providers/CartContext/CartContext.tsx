import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { ICartContext, IProductsCart } from './types';
import { IProviderProps } from '../UserContect/type';

export const CartContext = createContext({} as ICartContext);

export const CartContextProvider = ({ children }: IProviderProps) => {
  const [cart, setCart] = useState([] as IProductsCart[]);

  // eslint-disable-next-line no-console
  console.log(cart);

  function addProduct(item: IProductsCart) {
    if (
      !cart.some(
        (currentproduct: IProductsCart) => currentproduct.id === item.id
      )
    ) {
      setCart([...cart, item]);
    } else {
      toast.warning('O produto já foi adicionado');
    }
  }

  function removeProduct(currentProduct: IProductsCart) {
    const newCardProduct = cart.filter(
      (product) => product.id !== currentProduct.id
    );
    setCart(newCardProduct);
  }

  function removeTodo() {
    setCart([]);
  }
  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, removeTodo, setCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
