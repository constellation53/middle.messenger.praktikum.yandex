// Core
import Block from '../../../core/utils/block';

// Templates
import template from './index.hbs';

// Other
import * as styles from './styles/index.module.scss';
import { MessageItemType } from '../chatList/types';
import { TextMessageType } from './types';
import { TextMessageComponent } from './textMessage';

const messages: MessageItemType[] = [
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
      content: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — '
        + 'НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну'
        + '. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, '
        + 'все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с '
        + 'собой забрали только кассеты с пленкой.\n'
        + '\n'
        + 'Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на '
        + 'ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из'
        + ' них недавно продали на аукционе за 45000 евро.',
    },
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
  },
];

export class DialogComponent extends Block {
  constructor() {
    super();
  }

  prepareList(list: MessageItemType[]): Block<TextMessageType>[] {
    return list.map((
      {
        lastMessage:
        { content, time },
      },
    ) => new TextMessageComponent({
      content, time, fullTime: time,
    }));
  }

  init(): void {
    this.children.list = this.prepareList(messages);
    console.log(this.children.list);
  }

  render(): HTMLElement {
    return this.compile(template, { styles });
  }
}
