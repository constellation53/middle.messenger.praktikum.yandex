// Core
import Block from '../../utils/block';

// Template
import template from './index.hbs';

// Other
import * as styles from './styles/index.module.scss';
import { NavType } from './types';

type PropsType = NavType;

export class NavComponent extends Block<NavType> {
  constructor(props: PropsType) {
    super(props);
  }

  render(): HTMLElement {
    return this.compile(template, { ...this.props, styles });
  }
}
