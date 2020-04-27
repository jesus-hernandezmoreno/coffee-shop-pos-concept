import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
/* Device */
import { device } from 'config/media';

const Paragraph = styled(motion.p)`
  /* Display & Box Model */
  margin: ${props => props.theme.typography.defaultBoxModel.margin};
  /* Text */
  font-size: ${props => props.theme.typography.paragraph.fontSizes.mobile};
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: ${props => props.theme.typography.defaultBoxModel.letterSpacing};
  text-align: ${props => props.theme.typography.defaultBoxModel.textAlign};
  /* Styling */
  color: ${props => props.theme.typography.paragraph.mainColor};
  /* Laptop/Desktop devices */
  @media ${device.laptop} {
    /* Display & Box Model */
    font-size: ${props => props.theme.typography.paragraph.fontSizes.desktop};
  }
  /* Highlight Color */
  ${props =>
    props.highlight &&
    css`
      color: ${props => props.theme.typography.paragraph.highlightColor};
    `};
`;

Paragraph.displayName = 'Paragraph';

export default Paragraph;
