import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Hero } from 'typography';
/* Colors */
import colors from 'config/colors';

export const Container = styled(motion.div)`
  /* Positioning */
  position: fixed;
  bottom: 0;
  left: 0;
  /* Display & Box Model */
  width: 100%;
  /* Styling  */
  background: ${colors.white};
  box-shadow: ${props => props.theme.common.boxShadow};
`;

export const Content = styled(motion.div)`
  /* Styling  */
  background: ${colors.white};
`;

export const InnerContent = styled(motion.div)`
  /* Display & Box Model */
  padding: 2rem 1rem;
  overflow: auto;
`;

export const Header = styled.div`
  /* Display & Box Model */
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.lightishBrown};
  padding: 1rem;
  /* Styling  */
  box-shadow: ${props => props.theme.common.boxShadow};
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
`;
export const Title = styled(Hero)`
  /* Display & Box Model */
  margin: 0;
  /* Styling  */
  color: ${colors.paleYellow};
`;

export const NoProducts = styled.div`
  /* Display & Box Model */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Products = styled.div`
  /* Display & Box Model */
  display: flex;
  flex-flow: column;
  padding: 2rem;
  width: 100%;
  max-height: 45rem;
  overflow-y: auto;
  overflow-x: hidden;
`;

/* ================= Total ================= */

export const Total = styled.div`
  /* Display & Box Model */
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const TotalDetail = styled.div`
  /* Display & Box Model */
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 2rem;
`;

export const TotalName = styled.h1`
  /* Display & Box Model */
  margin-bottom: 0;
  /* Styling  */
  color: ${colors.lightBrown};
  /* Text */
  font-size: 3.5rem;
  font-weight: bolder;
`;

export const TotalAmount = styled.h1`
  /* Display & Box Model */
  margin-bottom: 0;
  /* Styling  */
  color: ${colors.lightBrown};
  /* Text */
  font-size: 3.5rem;
  font-weight: bolder;
`;
