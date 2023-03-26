// Core
import { EventHandlerType } from '../../../utils/block/types';

// Elements
import { Error } from '../error';
import { Field } from '../field';
import { Label } from '../label';

type HtmlTypeType = 'text' | 'password' | 'file';

type ValidationType = {
  error: boolean;
  message?: string;
};

type EventsType = {
  change?: EventHandlerType<'change'>;
  focus?: EventHandlerType<'focus'>;
  blur?: EventHandlerType<'blur'>;
  input?: EventHandlerType<'input'>;
};

type CoreType = {
  id: string | number;
  name: string;
  label: string;
  htmlType?: HtmlTypeType;
  hidden?: boolean;
  value?: string;
  validation?: ValidationType;
  disabled?: boolean;
  events?: EventsType;
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

export type ErrorType = {
  message?: string;
};

export type FieldType = {
  id: string | number;
  name: string;
  htmlType?: HtmlTypeType;
  value?: string;
  disabled?: boolean;
  events?: EventsType;
  validation?: ValidationType;
};

export type LabelType = {
  label: string;
};

export type ChildrenType = {
  error: Error;
  field: Field;
  label: Label;
};
