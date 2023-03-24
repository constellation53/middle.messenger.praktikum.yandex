// Core
import { Block } from '../../../utils/block';

// Templates
import template from './index.hbs';

// Other
import * as styles from '../styles/index.module.scss';
import { FieldType } from '../types';

type PropsType = FieldType;

export class Field extends Block<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }

  onInput(event: Event): void {
    const target = <HTMLInputElement>event.target;

    target.setAttribute('value', target.value);
  }

  render(): HTMLElement {
    return this.compile(template, {
      ...this.props,
      events: {
        ...(this.props.events && this.props.events),
        input: this.onInput.bind(this),
      },
      styles,
    });
  }
}
