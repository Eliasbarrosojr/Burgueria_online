import { MdClose } from 'react-icons/md';
import { useContext } from 'react';
import CartProductList from './CartProductList';

import { StyledCartModalBox } from './style';
import { StyledParagraph, StyledTitle } from '../../styles/typography';
import { UserContext } from '../../Providers/UserContect/UserContext';
import { CartContext } from '../../Providers/CartContext/CartContext';

const CartModal = () => {
  const { setOpenCart } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  // eslint-disable-next-line no-console

  return (
    <StyledCartModalBox>
      <dialog>
        <header>
          <StyledTitle tag='h2' $fontSize='three'>
            Carrinho de compras
          </StyledTitle>
          <button
            type='button'
            aria-label='Fechar'
            onClick={() => {
              setOpenCart(true);
            }}
          >
            <MdClose size={21} />
          </button>
        </header>
        <div className='cartBox'>
          {cart.length === 0 ? (
            <div className='emptyBox'>
              <StyledTitle tag='h3' $fontSize='three' textAlign='center'>
                Sua sacola está vazia
              </StyledTitle>
              <StyledParagraph textAlign='center'>
                Adicione itens
              </StyledParagraph>
            </div>
          ) : (
            <CartProductList />
          )}
        </div>
      </dialog>
    </StyledCartModalBox>
  );
};

export default CartModal;
