import Block from '../../../../core/utils/block';

export type MessagesType = {
  list: Block[];
};

export type TextMessageType = {
  content: string;
  time: string;
  fullTime: string;
};

type UserType = {
  firstName: string;
  secondName: string;
  avatar: string | null;
  email: string;
  login: string;
  phone: string;
};

export type MessageItemType = {
  id: number;
  title: string;
  avatar: string | null;
  unreadCount: number | null;
  lastMessage: {
    user: UserType
    time: string
    content: string
  }
};
