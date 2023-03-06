type HtmlTypeType = 'text' | 'password' | 'file';

type ValidationType = {
  error: boolean;
  message?: string;
};

type CoreType = {
  id: string | number;
  name: string;
  label: string;
  htmlType?: HtmlTypeType;
  hidden?: boolean;
  value?: string;
  validation?: ValidationType;
};

type HorizontalInputType = {
  horizontal?: boolean;
  vertical?: never;
} & CoreType;

type VerticalInputType = {
  vertical?: boolean;
  horizontal?: never;
} & CoreType;

export type InputType = HorizontalInputType | VerticalInputType;
