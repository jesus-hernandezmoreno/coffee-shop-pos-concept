import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  /* Display & Box Model */
  flex: 5;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  margin-right: 2rem;
  height: 100%;
  overflow: auto;
`;
