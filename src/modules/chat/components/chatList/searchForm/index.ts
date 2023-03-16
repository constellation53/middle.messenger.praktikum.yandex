// Infrastructure
import Block from '../../../../core/utils/block';

// Elements
import { Search } from '../../../../core/elements/search';

// Templates
import template from './index.hbs';

// Other
import * as styles from '../styles/index.module.scss';

export class SearchFormComponent extends Block {
  constructor() {
    super();
  }

  init(): void {
    this.children.searchInput = new Search({
      placeholder: 'Поиск',
      name: 'user_id',
      id: 'user_id',
    });
  }

  render(): HTMLElement {
    return this.compile(template, { styles });
  }
}
