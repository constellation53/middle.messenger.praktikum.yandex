export type InfoFormType = {
  disabled?: boolean;
};

export type FieldsType = 'email'
  | 'login'
  | 'first_name'
  | 'second_name'
  | 'display_name'
  | 'phone';

export type FormFieldsType = Record<FieldsType, string>;
