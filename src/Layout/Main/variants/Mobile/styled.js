import styled from 'styled-components';

export const Container = styled.div`
  /* Styling */
  background: ${props => props.theme.background.main};
`;

export const Content = styled.div`
  /* Display & Box Model */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
`;

export const Logo = styled.img`
  /* Display & Box Model */
  margin: 0 auto;
  display: block;
  width: ${props => props.width || '10rem'};
`;

export const TopContainer = styled.nav`
  /* Positioning */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  /* Position */
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem 1.5rem;
  /* Styling */
  background: ${props => props.theme.navbar.background};
  box-shadow: ${props => props.theme.common.boxShadow};
`;
