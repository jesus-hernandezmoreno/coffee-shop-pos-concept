import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
/* Device */
import { device } from 'config/media';

const Title = styled(motion.h1)`
  /* Display & Box Model */
  margin: ${props => props.theme.typography.defaultBoxModel.margin};
  /* Text */
  font-size: ${props => props.theme.typography.title.fontSizes.mobile};
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: ${props => props.theme.typography.defaultBoxModel.letterSpacing};
  text-align: ${props => props.theme.typography.defaultBoxModel.textAlign};
  /* Styling */
  color: ${props => props.theme.typography.title.mainColor};
  /* Laptop/Desktop devices */
  @media ${device.laptop} {
    /* Display & Box Model */
    font-size: ${props => props.theme.typography.title.fontSizes.desktop};
  }
  /* Highlight Color */
  ${props =>
    props.highlight &&
    css`
      color: ${props => props.theme.typography.title.highlightColor};
    `};
`;

Title.displayName = 'Title';

export default Title;
