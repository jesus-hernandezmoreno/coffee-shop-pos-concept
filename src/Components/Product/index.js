import React, { useRef, useEffect, useState } from 'react';
import { useMotionValue, useTransform } from 'framer-motion';
import { useDispatch } from 'react-redux';
/* Redux */
import { removeProduct } from 'redux/modules/products';
/* Components */
import Size from './Size';
/* Styled Components */
import { Container, Name, Quantity, Img, Price, Information } from './styled';
/* Colors */
import colors from 'config/colors';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const x = useMotionValue(0);

  const [parentWidth, setParentWidth] = useState(0);

  const ref = useRef();

  const background = useTransform(
    x,
    [-150, 0, 150],
    [colors.red, colors.whiteish, colors.whiteish]
  );
  const color = useTransform(
    x,
    [-150, 0, 150],
    [colors.white, colors.lightBrown, colors.lightBrown]
  );

  //Use Effect
  useEffect(() => {
    if (ref.current) {
      setParentWidth(ref.current.parentNode.clientWidth);
    }
  }, []);

  const onDragEnd = (event, info, product) => {
    const LEFT_THRESHOLD = parentWidth / 2;
    if (Math.sign(info.point.x) === -1) {
      const PointX = Math.abs(info.point.x);
      if (PointX > LEFT_THRESHOLD) {
        dispatch(removeProduct(product));
      }
    }
  };

  return (
    <Container
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: -parentWidth, opacity: 0 }}
      transition={{ duration: 0.5 }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      onDragEnd={(event, info) => onDragEnd(event, info, product)}
      style={{ x, background }}
    >
      <Information>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Img src={product.image} />
          <Name style={{ color }}>{product.name}</Name>
        </div>
        <Quantity style={{ color }}>x {product.totalQuantity}</Quantity>
        <Price style={{ color }}>$ {product.total}</Price>
      </Information>
      {product.sizes.map(size => (
        <Size key={size.name} size={size} x={x} product={product} />
      ))}
    </Container>
  );
};

export default Product;
