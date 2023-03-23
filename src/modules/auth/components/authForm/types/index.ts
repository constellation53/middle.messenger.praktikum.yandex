export type FieldsType = 'login'
  | 'password';

export type FormFieldsType = Record<FieldsType, string>;

export type ValidatorType = {
  login: [string];
  password: [string];
}
