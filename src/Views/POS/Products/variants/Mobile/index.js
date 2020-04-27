import React from 'react';
/* Components */
import CoffeeCard from 'Components/CoffeeCard';
import Slider from 'Components/Slider';
/* Styled Components */
import { Container } from './styled';
/* Utils */
import coffeeData from 'utils/coffeData';

const Products = () => {
  return (
    <Container>
      <Slider>
        {coffeeData.map(coffee => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </Slider>
    </Container>
  );
};

export default Products;
