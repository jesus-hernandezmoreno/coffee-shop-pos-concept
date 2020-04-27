import { motion } from 'framer-motion';
import styled from 'styled-components';
/* Device */
import { device } from 'config/media';
/* Colors */
import colors from 'config/colors';

export const Coffee = styled(motion.div)`
  /* Display & Box Model */
  min-width: 25rem;
  margin: 0 1rem;
  min-height: 25rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  /* Styling  */
  background-color: ${colors.whiteish};
  box-shadow: ${props => props.theme.common.boxShadow};
  border-radius: 1rem;
  /* Laptop/Desktop devices */
  @media ${device.laptop} {
    /* Display & Box Model */
    min-width: initial;
    width: 30%;
    margin: 0 0 4rem 0;
  }
`;

export const Name = styled.div`
  /* Display & Box Model */
  margin-bottom: 2rem;
  /* Styling  */
  color: ${colors.lightBrown};
  /* Text */
  font-size: 2.5rem;
  font-weight: bolder;
`;

export const Price = styled.div`
  /* Display & Box Model */
  margin-bottom: 2rem;
  /* Styling  */
  color: ${colors.lightBrown};
  /* Text */
  font-size: 3rem;
  font-weight: bolder;
`;

export const Img = styled.img`
  /* Display & Box Model */
  width: 8rem;
  margin-bottom: 1rem;
`;

export const Sizes = styled.div`
  /* Display & Box Model */
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
