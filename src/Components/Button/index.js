import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Button = styled.button`
  /* Display & Box Model */
  display: block;
  padding: ${props => props.padding || '1.5rem 2.5rem'};
  margin: ${props => props.margin || '0 auto'};
  width: ${props => props.width || 'auto'};
  /* Styling */
  background: ${props => props.theme.button.background};
  color: ${props => props.theme.button.color};
  border: none;
  border-radius: ${props => props.borderRadius || '2.5rem'};
  box-shadow: ${props => props.theme.common.boxShadow};
  /* Text */
  font-size: ${props => props.fontSize || '2rem'};
  /* Disabled */
  ${props =>
    props.disabled &&
    css`
      color: ${props => props.theme.button.disabledColor};
      background-color: ${props => props.theme.button.disabledBackground};
    `};
`;

Button.defaultProps = {
  disabled: false
};

Button.propTypes = {
  disabled: PropTypes.bool
};

Button.displayName = 'Button';

export default Button;
