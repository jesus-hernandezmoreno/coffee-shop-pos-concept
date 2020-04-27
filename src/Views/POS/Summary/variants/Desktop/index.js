import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
/* Components */
import Button from 'Components/Button';
import Product from 'Components/Product';
import { Subhero } from 'typography';
/* Styled Components */
import {
  Container,
  Header,
  Title,
  Products,
  NoProducts,
  Total,
  TotalDetail,
  TotalName,
  TotalAmount
} from './styled';

/* reducer method that takes in the accumulator and next item */
const reducer = (accumulator, item) => {
  return accumulator + item.total;
};

const Summary = () => {
  const products = useSelector(state => state.products.products);

  const getTotal = products => {
    let total = 0;
    if (!products.length) {
      return 0;
    }
    total = products.reduce(reducer, 0);
    return total;
  };

  const confirmOrder = () => {
    toast.success('The order has been placed');
  };

  return (
    <Container>
      <Header>
        <Title>Summary</Title>
      </Header>

      {products.length ? (
        <Products>
          <AnimatePresence>
            {products.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </Products>
      ) : (
        <NoProducts>
          <Subhero initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            No products
          </Subhero>
        </NoProducts>
      )}

      <Total>
        <TotalDetail>
          <TotalName>Total</TotalName>
          <TotalAmount>$ {getTotal(products)}</TotalAmount>
        </TotalDetail>
        <Button onClick={confirmOrder}>Confirm Order</Button>
      </Total>
    </Container>
  );
};

export default Summary;
