export type FieldsType = 'oldPassword'
  | 'newPassword'
  | 'repeatNewPassword';

export type FormFieldsType = Record<FieldsType, string>;

export type ValidatorType = {
  oldPassword: [string];
  newPassword: [string];
  repeatNewPassword: [string, string];
}
