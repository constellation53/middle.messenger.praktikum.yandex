// Core
import Block from '../../../../core/utils/block';

// Elements
import { Divider } from '../../../../core/elements/divider';
import { Avatar } from '../../../../core/elements/avatar';

// Templates
import template from './index.hbs';

// Other
import * as styles from '../styles/index.module.scss';

export class HeaderComponent extends Block {
  constructor() {
    super();
  }

  init(): void {
    this.children.avatar = new Avatar({
      alt: 'user',
      small: true,
    });

    this.children.divider = new Divider();
  }

  render(): HTMLElement {
    return this.compile(template, { styles, name: 'Вадим' });
  }
}
