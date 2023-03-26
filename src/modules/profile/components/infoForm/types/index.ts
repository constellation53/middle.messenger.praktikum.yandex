// Elements
import { Input } from '../../../../core/elements/input';
import { Divider } from '../../../../core/elements/divider';
import { Button } from '../../../../core/elements/button';

export type InfoFormType = {
  disabled?: boolean;
};

export type FieldsType = 'email'
  | 'login'
  | 'first_name'
  | 'second_name'
  | 'display_name'
  | 'phone';

export type ValidatorType = {
  email: [string];
  login: [string];
  first_name: [string];
  second_name: [string];
  display_name: [string];
  phone: [string];
};

export type FormFieldsType = Record<keyof ValidatorType, string>;

export type ChildrenType = {
  emailInput: Input;
  loginInput: Input;
  firstNameInput: Input;
  secondNameInput: Input;
  displayNameInput: Input;
  phoneInput: Input;
  emailDivider: Divider;
  loginDivider: Divider;
  firstNameDivider: Divider;
  secondNameDivider: Divider;
  displayNameDivider: Divider;
  saveButton: Button;
};
