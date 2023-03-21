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

export type ChatItemType = {
  id: number;
  title: string;
  avatar: string | null;
  unreadCount: number | null;
  lastMessage: LastMessageType;
  isMy: boolean;
};
