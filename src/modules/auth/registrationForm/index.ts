// Infrastructure
import Block from '../../core/utils/block';

// Templates
import template from './index.hbs';

// Elements
import { Input } from '../../core/elements/input';
import { Button } from '../../core/elements/button';

// Other
import * as styles from './styles/index.module.scss';
import { routes } from '../../core/config';

export class RegistrationFormComponent extends Block {
  constructor() {
    super();
  }

  init(): void {
    this.children.emailInput = new Input({
      id: 'email',
      name: 'email',
      label: 'Почта',
      value: 'pochta@yandex.ru',
    });

    this.children.loginInput = new Input({
      id: 'login',
      name: 'login',
      label: 'Логин',
      value: 'ivanivanov',
    });

    this.children.firstNameInput = new Input({
      id: 'first_name',
      name: 'first_name',
      label: 'Имя',
      value: 'Иван',
    });

    this.children.secondNameInput = new Input({
      id: 'second_name',
      name: 'second_name',
      label: 'Фамилия',
      value: 'Иванов',
    });

    this.children.phoneInput = new Input({
      id: 'phone',
      name: 'phone',
      label: 'Телефон',
      value: '+7 (909) 967 30 30',
    });

    this.children.passwordInput = new Input({
      id: 'password',
      name: 'password',
      htmlType: 'password',
      label: 'Пароль',
      value: '123456789123',
      validation: { error: true },
    });

    this.children.passwordCopyInput = new Input({
      id: 'passwordCopy',
      name: 'passwordCopy',
      htmlType: 'password',
      label: 'Пароль (ещё раз)',
      value: '123456789123',
      validation: { error: true, message: 'Пароли не совпадают' },
    });

    this.children.registerButton = new Button({
      text: 'Создать аккаунт',
      fluid: true,
    });

    this.children.loginButton = new Button({
      text: 'Войти',
      secondary: true,
      fluid: true,
      href: routes.signUp.path,
      class: 'size-12',
    });
  }

  render(): DocumentFragment {
    return this.compile(template, { styles });
  }
}
