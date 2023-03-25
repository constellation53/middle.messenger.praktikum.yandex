// Core
import { Block } from '../../../../core/utils/block';

// Elements
import { Divider } from '../../../../core/elements/divider';
import { Button } from '../button';
import { AttachFile } from '../attachFile';
import { Input } from '../input';

// Templates
import template from './index.hbs';

// Other
import * as styles from '../styles/index.module.scss';
import { MessageFormChildrenType } from '../types';
import { MessageValidator } from '../utils/messageValidator';

export class MessageFormComponent extends Block<never, MessageFormChildrenType> {
  protected readonly validator = new MessageValidator();

  constructor() {
    super();
  }

  init(): void {
    this.children.divider = new Divider();
    this.children.button = new Button({ disabled: true });
    this.children.attachFile = new AttachFile();
    this.children.input = new Input({
      events: {
        input: this.onChange.bind(this),
        blur: this.onChange.bind(this),
        focus: this.onChange.bind(this),
      },
    });
  }

  onChange(event: FocusEvent | Event): void {
    const target = <HTMLInputElement>event.target;

    this.validator.execute('message', target.value);

    const errors = this.validator.getErrors();

    this.children.button.setProps({ disabled: errors.message.error });
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
      events: { submit: this.onSubmit },
      styles,
    });
  }
}
