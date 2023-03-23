// Core
import { Block } from '../../../core/utils/block';

// Elements
import { Input } from '../../../core/elements/input';
import { Button } from '../../../core/elements/button';

// Templates
import template from './index.hbs';

// Other
import * as styles from './styles/index.module.scss';
import { routes } from '../../../core/config';
import { RegistrationValidator } from './utils/registrationValidator';
import { FieldsType, FormFieldsType } from './types';
import { isBlockClass } from '../../../core/utils/guards/isBlockClass';

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
        focus: this.onFocus.bind(this, 'email'),
        blur: this.onFocus.bind(this, 'email'),
      },
    });

    this.children.loginInput = new Input({
      id: 'login',
      name: 'login',
      label: 'Логин',
      value: 'ivanivanov',
      events: {
        focus: this.onFocus.bind(this, 'login'),
        blur: this.onFocus.bind(this, 'login'),
      },
    });

    this.children.firstNameInput = new Input({
      id: 'first_name',
      name: 'first_name',
      label: 'Имя',
      value: 'Иван',
      events: {
        focus: this.onFocus.bind(this, 'first_name'),
        blur: this.onFocus.bind(this, 'first_name'),
      },
    });

    this.children.secondNameInput = new Input({
      id: 'second_name',
      name: 'second_name',
      label: 'Фамилия',
      value: 'Иванов',
      events: {
        focus: this.onFocus.bind(this, 'second_name'),
        blur: this.onFocus.bind(this, 'second_name'),
      },
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
        focus: this.onPasswordFocus.bind(this),
        blur: this.onPasswordFocus.bind(this),
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
        focus: this.onRepeatPasswordFocus.bind(this),
        blur: this.onRepeatPasswordFocus.bind(this),
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

  onFocus(field: FieldsType, event: FocusEvent): void {
    const target = <HTMLInputElement>event.target;

    this.validator.execute(field, target.value);

    const errors = this.validator.getErrors();

    // eslint-disable-next-line no-console
    console.log('errors => ', errors);
  }

  onPasswordFocus(event: FocusEvent): void {
    if (isBlockClass(this.children.passwordCopy)) {
      const newPassword = this.children.passwordCopy
        .getContent()!.querySelector('input')!;

      const target = <HTMLInputElement>event.target;

      this.validator.execute('password', target.value);

      const errors = this.validator.getErrors();

      // eslint-disable-next-line no-console
      console.log('errors => ', errors);
    }
  }

  onRepeatPasswordFocus(event: FocusEvent): void {
    if (isBlockClass(this.children.passwordInput)) {
      const newPassword = this.children.passwordInput
        .getContent()!.querySelector('input')!;

      const target = <HTMLInputElement>event.target;

      this.validator.execute('passwordCopy', target.value, newPassword.value);

      const errors = this.validator.getErrors();

      // eslint-disable-next-line no-console
      console.log('errors => ', errors);
    }
  }

  onSubmit(event: SubmitEvent): void {
    event.preventDefault();

    const formData = new FormData(<HTMLFormElement>event.target);
    const data = <FormFieldsType>Object.fromEntries(formData);

    this.validator.execute('email', data.email);
    this.validator.execute('login', data.login);
    this.validator.execute('first_name', data.first_name);
    this.validator.execute('second_name', data.second_name);
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
