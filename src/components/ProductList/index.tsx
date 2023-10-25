import { useContext } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { UserContext } from '../../Providers/UserContect/UserContext';

const ProductList = () => {
  const { products } = useContext(UserContext);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {products !== null ? (
        <StyledProductList>
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </StyledProductList>
      ) : (
        <p>Sem produtos</p>
      )}
    </>
  );
};
export default ProductList;
