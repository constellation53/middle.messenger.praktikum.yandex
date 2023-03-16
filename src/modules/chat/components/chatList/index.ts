// Infrastructure
import Block from '../../../core/utils/block';

// Templates
import template from './index.hbs';

// Components
import { LinkComponent } from './link';

// Other
import * as styles from './styles/index.module.scss';

export class ChatListComponent extends Block {
  constructor() {
    super();
  }

  init(): void {
    this.children.link = new LinkComponent();
  }

  render(): HTMLElement {
    return this.compile(template, { styles });
  }
}
