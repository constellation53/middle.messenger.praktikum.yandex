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
import { RegistrationValidator } from './utils/registrationValidator';
import { FormFieldsType } from './types';

export class RegistrationFormComponent extends Block {
  protected readonly validator = new RegistrationValidator();

  constructor() {
    super();
  }

  init(): void {
    this.children.emailInput = new Input({
      id: 'email',
      name: 'email',
      label: 'Почта',
      value: 'pochta@yandex.ru',
      events: {
        focus: (event): void => {
          const target = <HTMLInputElement>event.target;

          this.validator.execute('email', target);

          const errors = this.validator.getErrors();

          // eslint-disable-next-line no-console
          console.log('errors => ', errors);
        },
        blur: (event): void => {
          const target = <HTMLInputElement>event.target;

          this.validator.execute('email', target.value);

          const errors = this.validator.getErrors();

          // eslint-disable-next-line no-console
          console.log('errors => ', errors);
        },
      },
    });

    this.children.loginInput = new Input({
      id: 'login',
      name: 'login',
      label: 'Логин',
      value: 'ivanivanov',
      events: {
        focus: (event): void => {
          const target = <HTMLInputElement>event.target;

          this.validator.execute('login', target.value);

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

    this.children.firstNameInput = new Input({
      id: 'first_name',
      name: 'first_name',
      label: 'Имя',
      value: 'Иван',
      events: {
        focus: (event): void => {
          const target = <HTMLInputElement>event.target;

          this.validator.execute('first_name', target.value);

          const errors = this.validator.getErrors();

          // eslint-disable-next-line no-console
          console.log('errors => ', errors);
        },
        blur: (event): void => {
          const target = <HTMLInputElement>event.target;

          this.validator.execute('first_name', target.value);

          const errors = this.validator.getErrors();

          // eslint-disable-next-line no-console
          console.log('errors => ', errors);
        },
      },
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
      events: {
        focus: (event): void => {
          const target = <HTMLInputElement>event.target;

          this.validator.execute('password', target.value);

          const errors = this.validator.getErrors();

          // eslint-disable-next-line no-console
          console.log('errors => ', errors);
        },
        blur: (event): void => {
          const target = <HTMLInputElement>event.target;

          this.validator.execute('password', target.value);

          const errors = this.validator.getErrors();

          // eslint-disable-next-line no-console
          console.log('errors => ', errors);
        },
      },
    });

    this.children.passwordCopyInput = new Input({
      id: 'passwordCopy',
      name: 'passwordCopy',
      htmlType: 'password',
      label: 'Пароль (ещё раз)',
      value: '123456789123',
      validation: { error: true, message: 'Пароли не совпадают' },
      events: {
        focus: (event): void => {
          const target = <HTMLInputElement>event.target;

          this.validator.execute('passwordCopy', target.value);

          const errors = this.validator.getErrors();

          // eslint-disable-next-line no-console
          console.log('errors => ', errors);
        },
        blur: (event): void => {
          const target = <HTMLInputElement>event.target;

          this.validator.execute('passwordCopy', target.value);

          const errors = this.validator.getErrors();

          // eslint-disable-next-line no-console
          console.log('errors => ', errors);
        },
      },
    });

    this.children.registerButton = new Button({
      text: 'Создать аккаунт',
      fluid: true,
      htmlType: 'submit',
    });

    this.children.loginButton = new Button({
      text: 'Войти',
      secondary: true,
      fluid: true,
      href: routes.signIn.path,
      class: 'size-12',
    });
  }

  onSubmit(event: SubmitEvent): void {
    event.preventDefault();

    const formData = new FormData(<HTMLFormElement>event.target);
    const data = <FormFieldsType>Object.fromEntries(formData);

    this.validator.execute('email', data.email);
    this.validator.execute('login', data.login);
    this.validator.execute('password', data.password);
    this.validator.execute('passwordCopy', data.password, data.passwordCopy);

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
