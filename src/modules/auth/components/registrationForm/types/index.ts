// Elements
import { Input } from '../../../../core/elements/input';
import { Button } from '../../../../core/elements/button';

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

export type ChildrenType = {
  emailInput: Input;
  loginInput: Input;
  firstNameInput: Input;
  secondNameInput: Input;
  phoneInput: Input;
  passwordInput: Input;
  passwordCopyInput: Input;
  registerButton: Button;
  loginButton: Button;
};
