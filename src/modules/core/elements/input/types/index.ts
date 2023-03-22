// Core
import { EventHandlerType } from '../../../utils/block/types';

type HtmlTypeType = 'text' | 'password' | 'file';

type ValidationType = {
  error: boolean;
  message?: string;
};

type EventsType = {
  change?: EventHandlerType<'change'>;
  focus?: EventHandlerType<'focus'>;
  blur?: EventHandlerType<'blur'>;
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
