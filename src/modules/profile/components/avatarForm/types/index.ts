// Elements
import { Button } from '../../../../core/elements/button';
import { Input } from '../../../../core/elements/input';
import { Error } from '../error';

export type FieldsType = 'avatar';

export type FormFieldsType = Record<FieldsType, File>;

export type ValidatorType = {
  avatar: [File];
};

export type ErrorType = {
  message?: string;
};

export type ChildrenType = {
  chooseFileButton: Button;
  avatarInput: Input;
  changeButton: Button;
  error: Error;
};
