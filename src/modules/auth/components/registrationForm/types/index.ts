export type FieldsType = 'email'
  | 'login'
  | 'first_name'
  | 'second_name'
  | 'phone'
  | 'password'
  | 'passwordCopy';

export type FormFieldsType = Record<FieldsType, string>;

export type ValidatorType = {
  email: [string];
  login: [string];
  first_name: [string];
  second_name: [string];
  phone: [string];
  password: [string];
  passwordCopy: [string, string];
};
