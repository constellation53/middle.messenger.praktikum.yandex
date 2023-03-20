// Core
import { Block } from '../../../../core/utils/block';

// Elements
import { Divider } from '../../../../core/elements/divider';

// Templates
import template from './index.hbs';

// Other
import * as styles from '../styles/index.module.scss';
import { MessageFormType } from '../types';

type PropsType = MessageFormType;
export class MessageFormComponent extends Block<PropsType> {
  constructor(props: PropsType = {}) {
    super(props);
  }

  init(): void {
    this.children.divider = new Divider();
  }

  onSubmit(event: SubmitEvent): void {
    event.preventDefault();

    const formData = new FormData(<HTMLFormElement>event.target);
    const data = Object.fromEntries(formData);
    // eslint-disable-next-line no-console
    console.log(data);
  }

  render(): HTMLElement {
    return this.compile(template, {
      ...this.props,
      events: { submit: this.onSubmit },
      styles,
    });
  }
}
