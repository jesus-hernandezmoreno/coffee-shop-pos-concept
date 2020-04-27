import styled from 'styled-components';
import Input from './Input/index';

const Form = styled.form`
  /* Display & Box Model */
  padding: ${props => props.padding || '15px'};
`;
Form.Input = Input;

export default Form;
