// Infrastructure
import Block from '../../../core/utils/block';

// Templates
import template from './index.hbs';

// Components
import { LinkComponent } from './link';
import { SearchFormComponent } from './searchForm';

// Other
import * as styles from './styles/index.module.scss';

export class ChatListComponent extends Block {
  constructor() {
    super();
  }

  init(): void {
    this.children.link = new LinkComponent();
    this.children.search = new SearchFormComponent();
  }

  render(): HTMLElement {
    return this.compile(template, { styles });
  }
}
