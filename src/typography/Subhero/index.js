import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
/* Device */
import { device } from 'config/media';

const Subhero = styled(motion.h2)`
  /* Display & Box Model */
  margin: ${props => props.theme.typography.defaultBoxModel.margin};
  /* Text */
  font-size: ${props => props.theme.typography.subhero.fontSizes.mobile};
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: ${props => props.theme.typography.defaultBoxModel.letterSpacing};
  text-align: ${props => props.theme.typography.defaultBoxModel.textAlign};
  /* Styling */
  color: ${props => props.theme.typography.subhero.mainColor};
  /* Laptop/Desktop devices */
  @media ${device.laptop} {
    /* Display & Box Model */
    font-size: ${props => props.theme.typography.subhero.fontSizes.desktop};
  }
  /* Highlight Color */
  ${props =>
    props.highlight &&
    css`
      color: ${props => props.theme.typography.subhero.highlightColor};
    `};
`;

Subhero.displayName = 'Subhero';

export default Subhero;
