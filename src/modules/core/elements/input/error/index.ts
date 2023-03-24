// Core
import { Block } from '../../../utils/block';

// Templates
import template from './index.hbs';

// Other
import * as styles from '../styles/index.module.scss';
import { ErrorType } from '../types';

type PropsType = ErrorType;

export class Error extends Block<PropsType> {
  constructor(props: PropsType = {}) {
    super(props);
  }

  render(): HTMLElement {
    return this.compile(template, {
      ...this.props,
      styles,
    });
  }
}
