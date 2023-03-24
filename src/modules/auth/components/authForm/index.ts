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
import { FieldsType, FormFieldsType, ChildrenType } from './types';
import { AuthValidator } from './utils/authValidator';
import { validateField } from '../../../core/utils/validator/helpers/validateField';
import { validateFields } from '../../../core/utils/validator/helpers/validateFields';

export class AuthFormComponent extends Block<never, ChildrenType> {
  protected readonly validator = new AuthValidator();

  protected readonly fields: Record<FieldsType, Input> = {
    login: this.children.loginInput,
    password: this.children.passwordInput,
  };

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
        focus: this.onFocus.bind(this, 'login'),
        blur: this.onFocus.bind(this, 'login'),
      },
    });

    this.children.passwordInput = new Input({
      name: 'password',
      id: 'password',
      label: 'Пароль',
      value: '123456789123A',
      htmlType: 'password',
      events: {
        focus: this.onFocus.bind(this, 'password'),
        blur: this.onFocus.bind(this, 'password'),
      },
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

  onFocus(field: FieldsType, event: FocusEvent): void {
    const target = <HTMLInputElement>event.target;

    this.validator.execute(field, target.value);

    const errors = this.validator.getErrors();

    validateField<FieldsType>(field, this.fields, errors);
  }

  onSubmit(event: SubmitEvent): void {
    event.preventDefault();

    const formData = new FormData(<HTMLFormElement>event.target);
    const data = <FormFieldsType>Object.fromEntries(formData);

    this.validator.execute('login', data.login);

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
