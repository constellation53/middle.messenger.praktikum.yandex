// Elements
import { Input } from '../../../../core/elements/input';
import { Button } from '../../../../core/elements/button';

export type FieldsType = 'login'
  | 'password';

export type FormFieldsType = Record<FieldsType, string>;

export type ValidatorType = {
  login: [string];
  password: [string];
};

export type ChildrenType = {
  loginInput: Input;
  passwordInput: Input;
  loginButton: Button;
  registerButton: Button;
};
