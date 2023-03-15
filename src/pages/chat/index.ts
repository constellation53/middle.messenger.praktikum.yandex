// Infrastructure
import Block from '../../modules/core/utils/block';

// Templates
import template from './index.hbs';

// Other
import { render } from '../../modules/core/utils/render';
import * as styles from './styles/index.module.scss';

export class ChatPage extends Block {
  constructor() {
    super();
  }

  render(): HTMLElement {
    return this.compile(template, { styles });
  }
}

const chatPage = new ChatPage();

render('#root', chatPage);
