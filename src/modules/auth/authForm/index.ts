// Templates
import template from './index.hbs';

// Elements
import { Input } from '../../core/elements/input';
import { Button } from '../../core/elements/button';

// Other
import Block from '../../core/utils/block';
import styles from './styles/index.module.scss';
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

    this.children.loginButton = new Button({ text: 'Войти', fluid: true });

    this.children.registerButton = new Button({
      text: 'Нет аккаунта',
      fluid: true,
      secondary: true,
      class: 'size-12',
      href: routes.signUp.path,
    });
  }

  render(): DocumentFragment {
    return this.compile(template, { styles });
  }
}
