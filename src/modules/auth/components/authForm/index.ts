// Core
import { Block } from '../../../core/utils/block';

// Templates
import template from './index.hbs';

// Elements
import { Input } from '../../../core/elements/input';
import { Button } from '../../../core/elements/button';

// Other
import * as styles from './styles/index.module.scss';
import { routes } from '../../../core/config';
import { FormFieldsType } from '../registrationForm/types';
import { AuthValidator } from './utils/authValidator';

export class AuthFormComponent extends Block {
  protected readonly validator = new AuthValidator();

  constructor() {
    super();
  }

  init(): void {
    this.children.loginInput = new Input({
      name: 'login',
      id: 'login',
      label: 'Логин',
      value: 'ivanivanov',
      events: {
        focus: (event): void => {
          const target = <HTMLInputElement>event.target;

          this.validator.execute('login', target);

          const errors = this.validator.getErrors();

          // eslint-disable-next-line no-console
          console.log('errors => ', errors);
        },
        blur: (event): void => {
          const target = <HTMLInputElement>event.target;

          this.validator.execute('login', target.value);

          const errors = this.validator.getErrors();

          // eslint-disable-next-line no-console
          console.log('errors => ', errors);
        },
      },
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
    const data = <FormFieldsType>Object.fromEntries(formData);

    this.validator.execute('login', data.login);

    const errors = this.validator.getErrors();

    // eslint-disable-next-line no-console
    console.log('errors => ', errors);
    // eslint-disable-next-line no-console
    console.log('data => ', data);
  }

  render(): HTMLElement {
    return this.compile(template, {
      styles,
      events: { submit: this.onSubmit.bind(this) },
    });
  }
}
