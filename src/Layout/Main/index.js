import React from 'react';
/* Components */
import Mobile from './variants/Mobile';
import Desktop from './variants/Desktop';
/*Custom Hooks */
import { useWindowResize } from 'hooks';

const Main = props => {
  const { width } = useWindowResize();
  const isMobile = width <= 500;

  if (isMobile) {
    return <Mobile {...props} />;
  } else {
    return <Desktop {...props} />;
  }
};

export default Main;
