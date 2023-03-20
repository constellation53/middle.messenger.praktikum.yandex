// Core
import { Block } from '../../../core/utils/block';

// Templates
import template from './index.hbs';

// Components
import { HeaderComponent } from './header';
import { MessageComponent } from './message';
import { MessageFormComponent } from './messageForm';

// Other
import * as styles from './styles/index.module.scss';
import { DialogType, MessageItemType, MessageType } from './types';
import { isImage } from './utils/isImage';

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
      content: 'https://randompicturegenerator.com/img/'
        + 'cat-generator/g42f0c7f455898d8c885774bc78dbe661706bf5d87d59c'
        + 'da41ed00cff967dc44d61a7274d5c00c5caed5404e7cd1f3220_640.jpg',
    },
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
        email: 'nurzhan@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: '12:00',
      content: 'Круто!',
    },
  },
];

type PropsType = DialogType;

export class DialogComponent extends Block<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }

  prepareList(list: MessageItemType[]): Block<MessageType>[] {
    return list.map((
      {
        lastMessage:
        {
          content, time, user,
        },
      },
    ) => new MessageComponent({
      content,
      time,
      fullTime: time,
      isImage: isImage(content),
      isMy: user.email === 'nurzhan@email.com',
    }));
  }

  init(): void {
    this.children.header = new HeaderComponent();
    this.children.list = this.props.isEmpty ? [] : this.prepareList(messages);
    this.children.footer = new MessageFormComponent();
  }

  render(): HTMLElement {
    return this.compile(template, { ...this.props, styles });
  }
}
