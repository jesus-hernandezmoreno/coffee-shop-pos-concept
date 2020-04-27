import { motion } from 'framer-motion';
import styled from 'styled-components';
/* Colors */
import colors from 'config/colors';

export const Container = styled(motion.div)`
  /* Display & Box Model */
  width: 30%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Styling  */
  color: ${colors.lightBrown};
  background: ${colors.whiteish};
  box-shadow: ${props => props.theme.common.boxShadow};
  border-radius: 1rem;
  /* Text */
  font-size: 20px;
  font-weight: bolder;
  &.active {
    color: ${colors.white};
    background: ${colors.yellow};
  }
`;
