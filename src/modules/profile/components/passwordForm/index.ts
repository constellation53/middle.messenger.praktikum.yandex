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
import { PasswordValidator } from './utils/passwordValidator';
import { isBlockClass } from '../../../core/utils/guards/isBlockClass';
import { FormFieldsType } from './types';

export class PasswordFormComponent extends Block {
  protected readonly validator = new PasswordValidator();

  constructor() {
    super();
  }

  init(): void {
    this.children.oldPasswordInput = new Input({
      id: 'oldPassword',
      name: 'oldPassword',
      label: 'Старый пароль',
      value: '123456789',
      htmlType: 'password',
      horizontal: true,
      events: {
        focus: this.onFocusEvent.bind(this),
        blur: this.onFocusEvent.bind(this),
      },
    });

    this.children.newPasswordInput = new Input({
      id: 'newPassword',
      name: 'newPassword',
      label: 'Новый пароль',
      value: '12345',
      htmlType: 'password',
      horizontal: true,
      events: {
        focus: this.onNewPasswordFocus.bind(this),
        blur: this.onNewPasswordFocus.bind(this),
      },
    });

    this.children.repeatNewPasswordInput = new Input({
      id: 'repeatNewPassword',
      name: 'repeatNewPassword',
      label: 'Повторите новый пароль',
      value: '123456789',
      htmlType: 'password',
      horizontal: true,
      events: {
        focus: this.onRepeatPasswordFocus.bind(this),
        blur: this.onRepeatPasswordFocus.bind(this),
      },
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

  onFocusEvent(event: FocusEvent): void {
    const target = <HTMLInputElement>event.target;

    this.validator.execute('oldPassword', target.value);

    const errors = this.validator.getErrors();

    // eslint-disable-next-line no-console
    console.log('errors => ', errors);
  }

  onNewPasswordFocus(event: FocusEvent): void {
    if (isBlockClass(this.children.repeatNewPasswordInput)) {
      const repeatNewPasswordInput = this.children.repeatNewPasswordInput
        .getContent()!.querySelector('input')!;

      const target = <HTMLInputElement>event.target;

      this.validator.execute('newPassword', target.value);
      this.validator.execute('repeatNewPassword', target.value, repeatNewPasswordInput.value);

      const errors = this.validator.getErrors();

      // eslint-disable-next-line no-console
      console.log('errors => ', errors);
    }
  }

  onRepeatPasswordFocus(event: FocusEvent): void {
    if (isBlockClass(this.children.newPasswordInput)) {
      const newPassword = this.children.newPasswordInput
        .getContent()!.querySelector('input')!;

      const target = <HTMLInputElement>event.target;

      this.validator.execute('repeatNewPassword', target.value, newPassword.value);

      const errors = this.validator.getErrors();

      // eslint-disable-next-line no-console
      console.log('errors => ', errors);
    }
  }

  onSubmit(event: SubmitEvent): void {
    event.preventDefault();

    const formData = new FormData(<HTMLFormElement>event.target);
    const data = <FormFieldsType>Object.fromEntries(formData);

    this.validator.execute('oldPassword', data.oldPassword);
    this.validator.execute('newPassword', data.newPassword);
    this.validator.execute('repeatNewPassword', data.repeatNewPassword, data.newPassword);

    const errors = this.validator.getErrors();

    // eslint-disable-next-line no-console
    console.log('errors => ', errors);
    // eslint-disable-next-line no-console
    console.log('data => ', data);
  }

  render(): HTMLElement {
    return this.compile(template, {
      ...this.props,
      styles,
      events: { submit: this.onSubmit.bind(this) },
    });
  }
}
