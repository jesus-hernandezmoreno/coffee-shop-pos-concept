import React from 'react';
import { useDispatch } from 'react-redux';
import { useTransform } from 'framer-motion';
/* Redux */
import { updateProduct } from 'redux/modules/products';
/* Styled Components */
import { Container, Actions, Button, Name, Price } from './styled';
/* Colors */
import colors from 'config/colors';
import { Quantity } from '../styled';

const Size = ({ size, product, x }) => {
  const dispatch = useDispatch();
  const color = useTransform(
    x,
    [-150, 0, 150],
    [colors.white, colors.lightBrown, colors.lightBrown]
  );

  const { id, name, image } = product;
  const productToUpdate = {
    id,
    name,
    image,
    size: size.name,
    price: size.price
  };

  const subtractProductQuantity = () => {
    dispatch(updateProduct({ ...productToUpdate, action: 'SUBTRACT' }));
  };

  const addProductQuantity = () => {
    dispatch(updateProduct({ ...productToUpdate, action: 'ADD' }));
  };

  return (
    <Container>
      <Name style={{ color }}>{size.name}</Name>
      <Actions>
        <Button whileTap={{ scale: 1.5 }} style={{ color }} onTap={subtractProductQuantity}>
          -
        </Button>
        <Quantity fontSize="2rem" margin=" 0 2.5rem" style={{ color }}>
          {size.quantity}
        </Quantity>
        <Button whileTap={{ scale: 1.5 }} style={{ color }} onTap={addProductQuantity}>
          +
        </Button>
      </Actions>
      <Price style={{ color }}>$ {size.total}</Price>
    </Container>
  );
};

export default Size;
