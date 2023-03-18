import Block from '../../../core/utils/block';
import template from './index.hbs';
import * as styles from './styles/index.module.scss';

export class DialogComponent extends Block {
  constructor() {
    super();
  }

  render(): HTMLElement {
    return this.compile(template, { styles, isEmpty: true });
  }
}
