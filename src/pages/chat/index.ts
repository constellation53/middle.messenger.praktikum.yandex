// Core
import Block from '../../modules/core/utils/block';

// Templates
import template from './index.hbs';

// Components
import { ChatListComponent } from '../../modules/chat/components/chatList';

// Other
import { render } from '../../modules/core/utils/render';
import * as styles from './styles/index.module.scss';

export class ChatPage extends Block {
  constructor() {
    super();
  }

  init(): void {
    this.children.chatList = new ChatListComponent();
  }

  render(): HTMLElement {
    return this.compile(template, { styles });
  }
}

const chatPage = new ChatPage();

render('#root', chatPage);
