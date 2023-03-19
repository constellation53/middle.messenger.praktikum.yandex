// Core
import Block from '../../../../core/utils/block';

// Template
import template from './index.hbs';

// Other
import { TextMessageType } from '../types';
import * as styles from '../styles/index.module.scss';

type PropsType = TextMessageType;

export class TextMessageComponent extends Block<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }

  render(): HTMLElement {
    return this.compile(template, { ...this.props, styles });
  }
}
