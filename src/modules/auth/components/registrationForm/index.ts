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
import { ChildrenType, FieldsType, FormFieldsType } from './types';
import { validateField } from '../../../core/utils/validator/helpers/validateField';
import { validateFields } from '../../../core/utils/validator/helpers/validateFields';

export class RegistrationFormComponent extends Block<never, ChildrenType> {
  protected readonly validator = new RegistrationValidator();

  protected readonly fields: Record<FieldsType, Input> = {
    email: this.children.emailInput,
    login: this.children.loginInput,
    first_name: this.children.firstNameInput,
    second_name: this.children.secondNameInput,
    phone: this.children.phoneInput,
    password: this.children.passwordInput,
    passwordCopy: this.children.passwordCopyInput,
  };

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
      value: '+79099673030',
      events: {
        focus: this.onFocus.bind(this, 'phone'),
        blur: this.onFocus.bind(this, 'phone'),
      },
    });

    this.children.passwordInput = new Input({
      id: 'password',
      name: 'password',
      htmlType: 'password',
      label: 'Пароль',
      value: '1234567891231A',
      events: {
        focus: this.onFocus.bind(this, 'password'),
        blur: this.onFocus.bind(this, 'password'),
      },
    });

    this.children.passwordCopyInput = new Input({
      id: 'passwordCopy',
      name: 'passwordCopy',
      htmlType: 'password',
      label: 'Пароль (ещё раз)',
      value: '1234567891231A',
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

    validateField<FieldsType>(field, this.fields, errors);
  }

  onRepeatPasswordFocus(event: FocusEvent): void {
    const password = this.children.passwordInput
      .getContent().querySelector('input')!;

    const target = <HTMLInputElement>event.target;

    this.validator.execute('passwordCopy', target.value, password.value);

    const errors = this.validator.getErrors();

    validateField<FieldsType>('password', this.fields, errors);
  }

  onSubmit(event: SubmitEvent): void {
    event.preventDefault();

    const formData = new FormData(<HTMLFormElement>event.target);
    const data = <FormFieldsType>Object.fromEntries(formData);

    this.validator.execute('email', data.email);
    this.validator.execute('login', data.login);
    this.validator.execute('first_name', data.first_name);
    this.validator.execute('second_name', data.second_name);
    this.validator.execute('phone', data.phone);
    this.validator.execute('password', data.password);
    this.validator.execute('passwordCopy', data.password, data.passwordCopy);

    const errors = this.validator.getErrors();

    validateFields(this.fields, errors);

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
