// Infrastructure
import Block from '../../utils/block';

// Templates
import template from './index.hbs';

// Other
import { ButtonType } from './types';
import * as styles from './styles/index.module.scss';

type PropsType = ButtonType;

export class Button extends Block<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }

  render(): HTMLElement {
    return this.compile(template, { ...this.props, styles });
  }
}
