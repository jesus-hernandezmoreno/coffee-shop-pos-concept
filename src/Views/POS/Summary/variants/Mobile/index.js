import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAnimation, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
/* Components */
import Button from 'Components/Button';
import Product from 'Components/Product';
import { Subhero } from 'typography';
/* Styled Components */
import {
  Container,
  Content,
  InnerContent,
  Header,
  Title,
  Products,
  NoProducts,
  Total,
  TotalDetail,
  TotalName,
  TotalAmount
} from './styled';

const Swiper = () => {
  //Use Selector
  const products = useSelector(state => state.products.products);
  //Use State
  const [yOffset, setYOffset] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  //Use Ref
  const ref = useRef();
  const currentVariant = useRef('bottom');
  const inMotion = useRef(false);
  const animation = useAnimation();
  //Use Effect
  useEffect(() => {
    if (ref.current) {
      const [itemLower] = ref.current.getElementsByClassName('item-lower');
      setYOffset(itemLower.getBoundingClientRect().height);
      setMaxHeight(window.innerHeight * 0.6);
    }
  }, [products]);

  const handleDragStart = async () => {
    inMotion.current = true;
  };

  const handleDragEnd = async (_, { point, offset, velocity }) => {
    const pos = point.y * -1;
    const dir = offset.y < 0 ? 'up' : 'down';

    if (dir === 'up') {
      if (pos > yOffset / 4 || velocity.y < -20) {
        currentVariant.current = 'top';
      } else {
        currentVariant.current = 'bottom';
      }
    } else if (dir === 'down') {
      if (pos < yOffset / 4 || velocity.y > 20) {
        currentVariant.current = 'bottom';
      } else {
        currentVariant.current = 'top';
      }
    }

    await animation.start(currentVariant.current);
    inMotion.current = false;
  };

  const handleOnClick = async () => {
    if (inMotion.current === false) {
      currentVariant.current = currentVariant.current === 'top' ? 'bottom' : 'top';
      await animation.start(currentVariant.current);
    }
  };

  /* reducer method that takes in the accumulator and next item */
  const totalPriceReducer = (accumulator, item) => {
    return accumulator + item.total;
  };

  const totalProductsReducer = (accumulator, item) => {
    return accumulator + item.totalQuantity;
  };

  const getTotalPrice = products => {
    let total = 0;
    if (!products.length) {
      return 0;
    }
    total = products.reduce(totalPriceReducer, 0);
    return total;
  };

  const getTotalProducts = products => {
    let total = 0;
    if (!products.length) {
      return 0;
    }
    total = products.reduce(totalProductsReducer, 0);
    return total;
  };

  const confirmOrder = () => {
    toast.success('The order has been placed');
  };

  const variants = {
    top: {
      y: -yOffset
    },
    bottom: {
      y: 0
    }
  };
  return (
    <Container style={{ transform: `translateY(${yOffset}px)` }}>
      <Content
        ref={ref}
        drag={yOffset ? 'y' : false}
        dragDirectionLock
        dragConstraints={{ bottom: 0, top: -yOffset }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        dragMomentum={false}
        variants={variants}
        animate={animation}
        transition={{
          y: { type: 'spring', stiffness: 500, damping: 50 }
        }}
        dragPropagation={false}
      >
        <Header onClick={handleOnClick}>
          <Title>Summary ({getTotalProducts(products)})</Title>
        </Header>
        <InnerContent className="item-lower">
          {products.length ? (
            <Products
              style={{ maxHeight }}
              onScroll={e => {
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              <AnimatePresence>
                {products.map(product => (
                  <Product key={product.id} product={product} />
                ))}
              </AnimatePresence>
            </Products>
          ) : (
            <NoProducts>
              <Subhero>No products</Subhero>
            </NoProducts>
          )}
          <Total>
            <TotalDetail>
              <TotalName>Total</TotalName>
              <TotalAmount>$ {getTotalPrice(products)}</TotalAmount>
            </TotalDetail>
            <Button onClick={confirmOrder}>Confirm Order</Button>
          </Total>
        </InnerContent>
      </Content>
    </Container>
  );
};

export default Swiper;
