// Core
import Block from '../../../../core/utils/block';

// Template
import template from './index.hbs';

// Other
import { MessageType } from '../types';
import * as styles from '../styles/index.module.scss';
import { calculateLines } from '../utils/calculateLines';

type PropsType = MessageType;

export class MessageComponent extends Block<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }

  componentDidMount(): void {
    if (!this.props.isImage) {
      const lines = calculateLines(`[data-id="${this.id}"] .${styles.content}`);

      this.getContent()?.classList.toggle(styles.oneLine, lines <= 1);
    }
  }

  render(): HTMLElement {
    return this.compile(template, {
      ...this.props, styles, settings: { withInternalID: true },
    });
  }
}
