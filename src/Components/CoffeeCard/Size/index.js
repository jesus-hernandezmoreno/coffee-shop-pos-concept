import React, { useEffect, useRef } from 'react';
/* Styled Components */
import { Container } from './styled';

const Size = ({ size, handleSizeClick, activeSize }) => {
  const sizeRef = useRef(null);
  const pointerDown = event => {
    //Trick: Adding pointer down evento to stop parent's animations
    event.stopPropagation();
  };
  useEffect(() => {
    sizeRef.current.addEventListener('pointerdown', pointerDown);
  }, []);

  return (
    <Container
      ref={sizeRef}
      onClick={() => handleSizeClick(size)}
      className={activeSize.id === size.id ? 'active' : ''}
    >
      {size.size}
    </Container>
  );
};

export default Size;
