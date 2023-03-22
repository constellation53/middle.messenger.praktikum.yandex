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
