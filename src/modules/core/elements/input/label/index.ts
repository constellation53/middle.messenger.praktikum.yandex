// Core
import { Block } from '../../../utils/block';

// Templates
import template from './index.hbs';

// Other
import * as styles from '../styles/index.module.scss';
import { LabelType } from '../types';

type PropsType = LabelType;

export class Label extends Block<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }

  render(): HTMLElement {
    return this.compile(template, {
      ...this.props,
      styles,
    });
  }
}
