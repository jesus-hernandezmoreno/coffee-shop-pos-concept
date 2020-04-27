import React from 'react';
/* Components */
import CoffeeCard from 'Components/CoffeeCard';
/* Styled Components */
import { Container } from './styled';
/* Utils */
import coffeeData from 'utils/coffeData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
};

const Products = () => {
  return (
    <Container variants={containerVariants} initial="hidden" animate="visible">
      {coffeeData.map(coffee => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
      ))}
    </Container>
  );
};

export default Products;
