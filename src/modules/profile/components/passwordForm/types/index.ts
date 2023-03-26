import { Input } from '../../../../core/elements/input';
import { Divider } from '../../../../core/elements/divider';
import { Button } from '../../../../core/elements/button';

export type FieldsType = 'oldPassword'
  | 'newPassword'
  | 'repeatNewPassword';

export type FormFieldsType = Record<FieldsType, string>;

export type ValidatorType = {
  oldPassword: [string];
  newPassword: [string];
  repeatNewPassword: [string, string];
};

export type ChildrenType = {
  oldPasswordInput: Input;
  newPasswordInput: Input;
  repeatNewPasswordInput: Input;
  oldPasswordDivider: Divider;
  loginDivider: Divider;
  newPasswordDivider: Divider;
  saveButton: Button;
};
