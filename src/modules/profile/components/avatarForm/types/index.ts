export type FieldsType = 'avatar';

export type FormFieldsType = Record<FieldsType, File>;

export type ValidatorType = {
  avatar: [File];
};
