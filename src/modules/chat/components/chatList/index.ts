// Core
import { Block } from '../../../core/utils/block';

// Templates
import template from './index.hbs';

// Components
import { LinkComponent } from './link';
import { SearchFormComponent } from './searchForm';
import { ChatItemComponent } from './chatItem';

// Other
import * as styles from './styles/index.module.scss';
import { ChatItemType } from './types';
import { isBlockArrayClass } from '../../../core/utils/guards/isBlockArrayClass';
import { Divider } from '../../../core/elements/divider';

const chats: ChatItemType[] = [
  {
    id: 123,
    title: 'Андрей',
    avatar: null,
    unreadCount: 15,
    lastMessage: {
      user: {
        firstName: 'Андрей',
        secondName: 'Pupkin',
        avatar: null,
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: '10:49',
      content: 'Изображение',
    },
    isMy: false
  },
  {
    id: 1234,
    title: 'Киноклуб',
    avatar: null,
    unreadCount: null,
    lastMessage: {
      user: {
        firstName: 'Nurzhan',
        secondName: 'Pupkin',
        avatar: null,
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: '12:00',
      content: 'Cтикер',
    },
    isMy: false
  },
  {
    id: 123,
    title: 'Илья',
    avatar: null,
    unreadCount: 4,
    lastMessage: {
      user: {
        firstName: 'Илья',
        secondName: 'Pupkin',
        avatar: null,
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: '15:12',
      content: 'Друзья, у меня для вас особенный выпуск новостей!'
        + 'Друзья, у меня для вас особенный выпуск новостей!'
        + 'Друзья, у меня для вас особенный выпуск новостей!',
    },
    isMy: false
  },
  {
    id: 1234,
    title: 'Вадим',
    avatar: null,
    unreadCount: null,
    lastMessage: {
      user: {
        firstName: 'Nurzhan',
        secondName: 'Pupkin',
        avatar: null,
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: 'Пт',
      content: 'Круто!',
    },
    isMy: true
  },
  {
    id: 123,
    title: 'тет-а-теты',
    avatar: null,
    unreadCount: null,
    lastMessage: {
      user: {
        firstName: 'Илья',
        secondName: 'Pupkin',
        avatar: null,
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: 'Ср',
      content: 'И Human Interface Guidelines и Material Design '
        + 'рекомендуют И Human Interface Guidelines и Material Design '
        + 'рекомендуют И Human Interface Guidelines и Material Design '
        + 'рекомендуют',
    },
    isMy: false
  },
  {
    id: 123,
    title: '1, 2, 3',
    avatar: null,
    unreadCount: null,
    lastMessage: {
      user: {
        firstName: 'Илья',
        secondName: 'Pupkin',
        avatar: null,
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: 'Пн',
      content: 'Миллионы россиян ежедневно проводят десятки '
        + 'часов свое Миллионы россиян ежедневно проводят'
        + 'десятки часов свое Миллионы россиян ежедневно '
        + 'проводят десятки часов свое',
    },
    isMy: false
  },
  {
    id: 123,
    title: 'Design Destroyer',
    avatar: null,
    unreadCount: null,
    lastMessage: {
      user: {
        firstName: 'Илья',
        secondName: 'Pupkin',
        avatar: null,
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: 'Пн',
      content: 'В 2008 году художник Jon Rafman  начал собирать '
        + 'В 2008 году художник Jon Rafman  начал собирать '
        + 'В 2008 году художник Jon Rafman  начал собирать',
    },
    isMy: false
  },
  {
    id: 123,
    title: 'Day.',
    avatar: null,
    unreadCount: 999,
    lastMessage: {
      user: {
        firstName: 'Илья',
        secondName: 'Pupkin',
        avatar: null,
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: '1 Мая 2020',
      content: 'Так увлёкся работой по курсу, что совсем забыл его анонсир '
        + 'Так увлёкся работой по курсу, что совсем забыл его анонси '
        + 'Так увлёкся работой по курсу, что совсем забыл его анонсир ',
    },
    isMy: false
  },
  {
    id: 123,
    title: 'Андрей',
    avatar: null,
    unreadCount: 15,
    lastMessage: {
      user: {
        firstName: 'Андрей',
        secondName: 'Pupkin',
        avatar: null,
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: '10:49',
      content: 'Изображение',
    },
    isMy: false
  },
  {
    id: 1234,
    title: 'Киноклуб',
    avatar: null,
    unreadCount: null,
    lastMessage: {
      user: {
        firstName: 'Nurzhan',
        secondName: 'Pupkin',
        avatar: null,
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: '12:00',
      content: 'Cтикер',
    },
    isMy: false
  },
  {
    id: 123,
    title: 'Илья',
    avatar: null,
    unreadCount: 4,
    lastMessage: {
      user: {
        firstName: 'Илья',
        secondName: 'Pupkin',
        avatar: null,
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: '15:12',
      content: 'Друзья, у меня для вас особенный выпуск новостей!'
        + 'Друзья, у меня для вас особенный выпуск новостей!'
        + 'Друзья, у меня для вас особенный выпуск новостей!',
    },
    isMy: false
  },
  {
    id: 1234,
    title: 'Вадим',
    avatar: null,
    unreadCount: null,
    lastMessage: {
      user: {
        firstName: 'Nurzhan',
        secondName: 'Pupkin',
        avatar: null,
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: 'Пт',
      content: 'Круто!',
    },
    isMy: false
  },
  {
    id: 123,
    title: 'тет-а-теты',
    avatar: null,
    unreadCount: null,
    lastMessage: {
      user: {
        firstName: 'Илья',
        secondName: 'Pupkin',
        avatar: null,
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: 'Ср',
      content: 'И Human Interface Guidelines и Material Design '
        + 'рекомендуют И Human Interface Guidelines и Material Design '
        + 'рекомендуют И Human Interface Guidelines и Material Design '
        + 'рекомендуют',
    },
    isMy: false
  },
  {
    id: 123,
    title: '1, 2, 3',
    avatar: null,
    unreadCount: null,
    lastMessage: {
      user: {
        firstName: 'Илья',
        secondName: 'Pupkin',
        avatar: null,
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: 'Пн',
      content: 'Миллионы россиян ежедневно проводят десятки '
        + 'часов свое Миллионы россиян ежедневно проводят'
        + 'десятки часов свое Миллионы россиян ежедневно '
        + 'проводят десятки часов свое',
    },
    isMy: false
  },
  {
    id: 123,
    title: 'Design Destroyer',
    avatar: null,
    unreadCount: null,
    lastMessage: {
      user: {
        firstName: 'Илья',
        secondName: 'Pupkin',
        avatar: null,
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: 'Пн',
      content: 'В 2008 году художник Jon Rafman  начал собирать '
        + 'В 2008 году художник Jon Rafman  начал собирать '
        + 'В 2008 году художник Jon Rafman  начал собирать',
    },
    isMy: false
  },
  {
    id: 123,
    title: 'Day.',
    avatar: null,
    unreadCount: 999,
    lastMessage: {
      user: {
        firstName: 'Илья',
        secondName: 'Pupkin',
        avatar: null,
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: '1 Мая 2020',
      content: 'Так увлёкся работой по курсу, что совсем забыл его анонсир '
        + 'Так увлёкся работой по курсу, что совсем забыл его анонси '
        + 'Так увлёкся работой по курсу, что совсем забыл его анонсир ',
    },
    isMy: false
  },
];

export class ChatListComponent extends Block {
  constructor() {
    super();
  }

  prepareList(list: ChatItemType[]): Block<ChatItemType>[] {
    return list.map(
      ({
        title,
        id,
        avatar,
        unreadCount,
        lastMessage,
        isMy,
      }) => new ChatItemComponent({
        title,
        id,
        avatar,
        unreadCount,
        lastMessage,
        isMy,
      }),
    );
  }

  init(): void {
    this.children.link = new LinkComponent();
    this.children.search = new SearchFormComponent();
    this.children.list = this.prepareList(chats);
    this.children.divider = new Divider();
  }

  componentDidMount(): void {
    const root = this.getContent();

    const lastChatItem = isBlockArrayClass(this.children.list)
      ? this.children.list.at(-1)!.getContent()
      : null;

    const observer = new IntersectionObserver((([{ intersectionRatio }]) => {
      root?.classList.toggle(styles.overflow, intersectionRatio < 1);
    }), { root });

    if (lastChatItem) {
      observer.observe(lastChatItem);
    }
  }

  render(): HTMLElement {
    return this.compile(template, { styles });
  }
}
