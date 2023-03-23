export type InfoFormType = {
  disabled?: boolean;
};

export type ValidatorType = {
  email: [string];
  login: [string];
  first_name: [string];
  second_name: [string];
  display_name: [string];
  phone: [string];
};

export type FormFieldsType = Record<keyof ValidatorType, string>;
