import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
/* Redux */
import { addProduct } from 'redux/modules/products';
/* Styled Components */
import { Coffee, Name, Price, Img, Sizes } from './styled';
/* Components */
import Size from './Size';

const CoffeCard = ({ coffee }) => {
  const dispatch = useDispatch();

  const [activeSize, setActiveSize] = useState('');

  useEffect(() => {
    setActiveSize(coffee.sizes[0]);
  }, [coffee.sizes]);

  const handleSizeClick = size => {
    setActiveSize(size);
  };

  const handleOnTap = () => {
    const coffeeToAdd = {
      id: coffee.id,
      name: coffee.name,
      image: coffee.image,
      size: activeSize.size,
      price: activeSize.price
    };
    dispatch(addProduct(coffeeToAdd));
  };

  const coffeeVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };

  return (
    <Coffee whileTap={{ scale: 1.2 }} onTap={handleOnTap} variants={coffeeVariants}>
      <Name>{coffee.name}</Name>
      <Img src={coffee.image} />
      <Price>${activeSize.price}</Price>
      <Sizes>
        {coffee.sizes.map(size => (
          <Size
            key={size.id}
            size={size}
            handleSizeClick={handleSizeClick}
            activeSize={activeSize}
          />
        ))}
      </Sizes>
    </Coffee>
  );
};

export default CoffeCard;
