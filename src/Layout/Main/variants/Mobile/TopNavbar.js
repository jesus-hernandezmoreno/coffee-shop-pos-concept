import React from 'react';
/* Styled Components */
import { TopContainer, Logo } from './styled';

import logo from 'assets/logo.png';

const MobileTopNavbar = () => {
  return (
    <TopContainer>
      <Logo width="4rem" src={logo} alt="logo" />
    </TopContainer>
  );
};

export default MobileTopNavbar;
