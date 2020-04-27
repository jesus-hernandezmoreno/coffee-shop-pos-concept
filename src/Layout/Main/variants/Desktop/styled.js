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
  min-height: calc(100vh - 13.8rem);
  margin: 0 auto;
`;

export const Logo = styled.img`
  /* Display & Box Model */
  margin: 0 auto;
  display: block;
  width: ${props => props.width || '10rem'};
`;
