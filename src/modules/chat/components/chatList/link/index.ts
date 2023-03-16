// Infrastructure
import Block from '../../../../core/utils/block';

// Templates
import template from './index.hbs';

// Other
import * as styles from '../styles/index.module.scss'
import { routes } from '../../../../core/config';

export class LinkComponent extends Block {
  constructor() {
    super();
  }

  render(): HTMLElement {
    return this.compile(template, { styles, routes })
  }
}
