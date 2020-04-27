import React from 'react';
/* Styled Components */
import { Container, Content, Logo } from './styled';

import logo from 'assets/logo.png';

const Desktop = ({ children }) => {
  return (
    <Container>
      <Logo src={logo} width="8rem" alt="logo" />
      <Content>{children}</Content>
    </Container>
  );
};

export default Desktop;
