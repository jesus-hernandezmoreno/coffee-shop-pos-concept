import React from 'react';
/* Components */
import TopNavbar from './TopNavbar';
/* Styled Components */
import { Container, Content } from './styled';

const Mobile = ({ children }) => {
  return (
    <Container>
      <TopNavbar />
      <Content>{children}</Content>
    </Container>
  );
};

export default Mobile;
