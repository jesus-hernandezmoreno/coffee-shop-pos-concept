import React from 'react';
/* Responsive Variants */
import Desktop from './variants/Desktop';
import Mobile from './variants/Mobile';
/*Custom Hooks */
import { useWindowResize } from 'hooks';

const Summary = () => {
  const { width } = useWindowResize();
  const isMobile = width <= 500;
  if (isMobile) {
    return <Mobile />;
  } else {
    return <Desktop />;
  }
};

export default Summary;
