// Infrastructure
import Block from '../../../core/utils/block';

// Elements
import { Input } from '../../../core/elements/input';
import { Button } from '../../../core/elements/button';

// Templates
import template from './index.hbs';

// Other
import * as styles from './styles/index.module.scss';

export class AvatarFormComponent extends Block {
  constructor() {
    super();
  }

  init(): void {
    this.children.avatarInput = new Input({
      id: 'avatar',
      name: 'avatar',
      label: 'Загрузить фото',
      value: '•••••••••',
      htmlType: 'file',
      hidden: true
    });

    this.children.changeButton = new Button({
      text: 'Поменять',
      fluid: true,
      htmlType: 'submit',
    });
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
      styles,
      events: { submit: this.onSubmit },
    });
  }
}
