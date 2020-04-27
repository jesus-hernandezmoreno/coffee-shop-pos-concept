import styled from 'styled-components';
import { motion } from 'framer-motion';
/* Components */
import { Paragraph } from 'typography';
/* Colors */
import colors from 'config/colors';

/* =================  Size ================= */
export const Container = styled(motion.div)`
  /* Display & Box Model */
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  width: 100%;
`;

export const Name = styled(motion.h1)`
  /* Display & Box Model */
  flex: 1;
  margin-bottom: 0;
  /* Styling  */
  color: ${colors.lightBrown};
  /* Text */
  font-size: 2rem;
  font-weight: bolder;
`;

export const Quantity = styled(Paragraph)``;

export const Price = styled(motion.div)`
  /* Display & Box Model */
  flex: 1;
  display: flex;
  justify-content: flex-end;
  /* Styling  */
  color: ${colors.lightBrown};
  /* Text */
  font-size: 2rem;
  font-weight: bolder;
`;

export const Actions = styled(motion.div)`
  /* Display & Box Model */
  display: flex;
  flex: 2;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

export const Button = styled(motion.button)`
  /* Display & Box Model */
  display: block;
  margin: 0 auto;
  width: 4.5rem;
  height: 4.5rem;
  /* Styling */
  background: none;
  color: ${colors.yellow};
  border: none;
  border-radius: 4.5rem;
  /* Text */
  font-size: 4rem;
`;
