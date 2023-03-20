// Core
import { Block } from '../../../core/utils/block';

// Elements
import { Divider } from '../../../core/elements/divider';
import { Input } from '../../../core/elements/input';
import { Button } from '../../../core/elements/button';

// Templates
import template from './index.hbs';

// Other
import * as styles from './styles/index.module.scss';

export class PasswordFormComponent extends Block {
  constructor() {
    super();
  }

  init(): void {
    this.children.oldPasswordInput = new Input({
      id: 'oldPassword',
      name: 'oldPassword',
      label: 'Старый пароль',
      value: '•••••••••',
      htmlType: 'password',
      horizontal: true,
    });

    this.children.newPasswordInput = new Input({
      id: 'newPassword',
      name: 'newPassword',
      label: 'Новый пароль',
      value: '•••••••••••',
      htmlType: 'password',
      horizontal: true,
    });

    this.children.repeatNewPasswordInput = new Input({
      id: 'repeatNewPassword',
      name: 'repeatNewPassword',
      label: 'Повторите новый пароль',
      value: 'Повторите новый пароль',
      htmlType: 'password',
      horizontal: true,
    });

    this.children.oldPasswordDivider = new Divider();

    this.children.loginDivider = new Divider();

    this.children.newPasswordDivider = new Divider();

    this.children.saveButton = new Button({
      text: 'Сохранить',
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
