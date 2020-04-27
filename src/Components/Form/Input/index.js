import React from 'react';
/* Styled Components */
import { Field, Input, Label, ErrorMessage, EyeIcon } from './styled';

const InputField = ({
  width,
  margin,
  label,
  error,
  onChange,
  onFocus,
  onBlur,
  name,
  value,
  placeholder,
  type,
  disabled,
  isPasswordShown,
  togglePasswordShown
}) => {
  let classNamesIconEye = 'far ';
  if (isPasswordShown) {
    classNamesIconEye += 'fa-eye visible';
  } else {
    classNamesIconEye += 'fa-eye-slash';
  }
  if (error) {
    classNamesIconEye += ' error';
  }
  return (
    <>
      <Field width={width} margin={margin}>
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          className={error ? 'error' : ''}
          disabled={disabled}
        />
        {togglePasswordShown && (
          <EyeIcon onClick={togglePasswordShown} className={classNamesIconEye} />
        )}
        <Label htmlFor={name}>{label}</Label>
      </Field>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

export default InputField;
