// Templates
import template from './index.hbs';

// Elements
import { Input } from '../../core/elements/input';
import { Button } from '../../core/elements/button';

// Other
import Block from '../../core/utils/block';
import * as styles from './styles/index.module.scss';
import { routes } from '../../core/config';

export class AuthFormComponent extends Block {
  constructor() {
    super();
  }

  init(): void {
    this.children.loginInput = new Input({
      name: 'login',
      id: 'login',
      label: 'Логин',
      value: 'ivanivanov',
    });

    this.children.passwordInput = new Input({
      name: 'password',
      id: 'password',
      label: 'Пароль',
      value: '123456789123',
      htmlType: 'password',
    });

    this.children.loginButton = new Button({
      text: 'Войти',
      fluid: true,
      htmlType: 'submit',
    });

    this.children.registerButton = new Button({
      text: 'Нет аккаунта',
      fluid: true,
      secondary: true,
      class: 'size-12',
      href: routes.signUp.path,
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
      styles,
      events: { submit: this.onSubmit },
    });
  }
}
