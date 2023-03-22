// Core
import { Block } from '../../utils/block';

// Templates
import template from './index.hbs';

// Other
import { InputType } from './types';
import * as styles from './styles/index.module.scss';

type PropsType = InputType;

export class Input extends Block<PropsType> {
  constructor(props: InputType) {
    super(props);
  }

  onInput(event: Event): void {
    const target = <HTMLInputElement>event.target;

    target.setAttribute('value', target.value);
  }

  render(): HTMLElement {
    return this.compile(template, {
      ...this.props,
      styles,
      events: {
        ...(this.props.events && this.props.events),
        input: this.onInput.bind(this),
      },
      eventTarget: 'input',
    });
  }
}
