import styled from 'styled-components';
import { motion } from 'framer-motion';
/* Colors */
import colors from 'config/colors';

export const Container = styled(motion.div)`
  /* Display & Box Model */
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;
  padding: 1rem;
  /* Styling  */
  background-color: ${colors.whiteish};
  box-shadow: ${props => props.theme.common.boxShadow};
`;

export const Information = styled(motion.div)`
  /* Display & Box Model */
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Name = styled(motion.h1)`
  /* Display & Box Model */
  margin-bottom: 0;
  /* Styling  */
  color: ${colors.lightBrown};
  /* Text */
  font-size: 3rem;
  font-weight: bolder;
`;

export const Price = styled(motion.h1)`
  /* Display & Box Model */
  margin-bottom: 0;
  /* Styling  */
  color: ${colors.lightBrown};
  /* Text */
  font-size: 2.5rem;
  font-weight: bolder;
`;

export const Quantity = styled(motion.h1)`
  /* Display & Box Model */
  margin-bottom: 0;
  /* Styling  */
  color: ${colors.lightBrown};
  /* Text */
  font-size: 2.5rem;
  font-weight: bolder;
`;

export const Img = styled(motion.img)`
  /* Display & Box Model */
  width: 2.5rem;
  margin-right: 3rem;
`;
