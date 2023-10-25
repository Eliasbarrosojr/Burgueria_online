export interface IProductsCart {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface IProduct {
  product: IProductsCart;
}

export interface ICartContext {
  cart: IProductsCart[];
  setCart: React.Dispatch<React.SetStateAction<IProductsCart[]>>;
  addProduct: (product: IProductsCart) => void;
  removeProduct: (product: IProductsCart) => void;
  removeTodo: () => void;
}
