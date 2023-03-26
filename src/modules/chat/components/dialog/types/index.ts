// Elements
import { Button } from '../button';
import { Divider } from '../../../../core/elements/divider';
import { AttachFile } from '../attachFile';
import { Input } from '../input';

// Other
import { EventHandlerType } from '../../../../core/utils/block/types';

export type ButtonType = {
  disabled?: boolean;
};

type EventsType = {
  focus?: EventHandlerType<'focus'>;
  blur?: EventHandlerType<'blur'>;
  input?: EventHandlerType<'input'>;
};

export type InputType = {
  events?: EventsType;
};

export type FieldsType = 'message';

export type MessageFormChildrenType = {
  divider: Divider;
  button: Button;
  attachFile: AttachFile;
  input: Input;
};

export type ValidatorType = {
  message: [string];
};

export type MessageType = {
  content: string;
  time: string;
  fullTime: string;
  isImage: boolean;
  isMy: boolean;
};

type UserType = {
  firstName: string;
  secondName: string;
  avatar: string | null;
  email: string;
  login: string;
  phone: string;
};

type LastMessageType = {
  user: UserType
  time: string
  content: string
};

export type MessageItemType = {
  id: number;
  title: string;
  avatar: string | null;
  unreadCount: number | null;
  lastMessage: LastMessageType;
};

export type MessageFormType = {
  disabled?: boolean;
};

export type DialogType = {
  isEmpty?: boolean;
};
