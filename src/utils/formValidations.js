/* Regex */
export const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
export const textRegex = RegExp(/^[a-zA-záéíóúÁÉÍÓÚñÑ]+(\s+|[a-zA-ZáéíóúÁÉÍÓÚñÑ])*$/);
export const phoneRegex = RegExp(
  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
);
export const rfcRegex = RegExp(
  /^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([A-Z]|[0-9]){2}([A]|[0-9]){1})?$/
);
export const passwordRegex = RegExp(
  /^(?=[a-zA-ZÑ!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[0-9])[a-zA-ZÑ!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?\d]{8,}$/
);
export const zipRegex = RegExp(/^(\d{5}([-]\d{4})?)$/);

/* Validate function to use on useForm hook */
export const validateField = (name, value) => {
  let error = '';
  switch (name) {
    case 'email':
      error = emailRegex.test(value) ? '' : 'Invalid email address';
      break;
    case 'password':
      error = value.length < 6 ? 'Minimum 6 characaters required' : '';
      break;
    default:
      break;
  }
  return error;
};

export const formValid = (errors, values) => {
  let valid = true;
  // validate form errors being empty
  Object.values(errors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  // validate the form was filled out
  Object.values(values).forEach(val => {
    (val === null || !val.length) && (valid = false);
  });
  return valid;
};
