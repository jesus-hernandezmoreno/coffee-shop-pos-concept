import styled from 'styled-components';

export const Field = styled.div`
  /* Positioning */
  position: relative;
  /* Display & Box Model */
  padding: 1.5rem 0 0;
  margin: ${props => props.margin || '2rem 0 0 0'};
  width: ${props => props.width || 'auto'};
`;

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border: 0;
  border-bottom: 1px solid ${props => props.theme.formField.border};
  outline: 0;
  font-size: 1.5rem;
  color: ${props => props.theme.formField.color};
  padding: 10px 0 5px 0;
  background: transparent;
  transition: border-color 0.2s;
  height: 40px;
  &[disabled] {
    color: ${props => props.theme.formField.color};
  }
  &::placeholder {
    color: transparent;
    background: transparent;
  }
  &:placeholder-shown ~ label {
    font-size: 1.5rem;
    cursor: text;
    top: 25px;
  }
  &:focus ~ label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 12px;
    color: ${props => props.theme.formField.color};
  }
  &:focus ~ label {
    color: ${props => props.theme.formField.focusColor};
  }
  &:focus {
    padding-bottom: 6px;
    border-bottom: 2px solid ${props => props.theme.formField.focusColor};
    color: ${props => props.theme.formField.focusColor};
  }
  &.error {
    color: ${props => props.theme.formField.errorColor};
    padding-bottom: 6px;
    border-bottom: 2px solid ${props => props.theme.formField.errorBorder};
  }
  &.error ~ label {
    color: ${props => props.theme.formField.errorColor};
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 12px;
  color: #ecf0f1;
`;

export const ErrorMessage = styled.span`
  /* Display & Box Model */
  display: block;
  margin-top: 1rem;
  /* Styling */
  color: ${props => props.theme.formField.errorColor};
  /* Text */
  font-size: 1.2rem;
  text-align: right;
`;

export const EyeIcon = styled.span`
  /* Positioning */
  position: absolute;
  right: 0;
  bottom: 0.7rem;
  font-size: 2rem !important;
  color: #81858a;
  &.visible {
    color: ${props => props.theme.formField.focusColor};
  }
  &.error {
    color: ${props => props.theme.formField.errorColor};
  }
`;
