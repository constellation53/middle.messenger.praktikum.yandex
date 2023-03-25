// Core
import { Block } from '../../../../core/utils/block';

// Templates
import template from './index.hbs';

// Other
import { InputType } from '../types';
import * as styles from '../styles/index.module.scss';

type PropsType = InputType;

export class Input extends Block<InputType> {
  constructor(props: PropsType) {
    super(props);
  }

  render(): HTMLElement {
    return this.compile(template, { ...this.props, styles });
  }
}
