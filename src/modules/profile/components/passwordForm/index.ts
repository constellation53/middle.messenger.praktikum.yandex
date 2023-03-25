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
import { ChildrenType, FormFieldsType, FieldsType } from './types';
import { validateField } from '../../../core/utils/validator/helpers/validateField';
import { validateFields } from '../../../core/utils/validator/helpers/validateFields';

export class PasswordFormComponent extends Block<never, ChildrenType> {
  protected readonly validator = new PasswordValidator();

  protected readonly fields: Record<FieldsType, Input> = {
    oldPassword: this.children.oldPasswordInput,
    newPassword: this.children.newPasswordInput,
    repeatNewPassword: this.children.repeatNewPasswordInput,
  };

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
        focus: this.onFocus.bind(this, 'oldPassword'),
        blur: this.onFocus.bind(this, 'oldPassword'),
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
        focus: this.onFocus.bind(this, 'newPassword'),
        blur: this.onFocus.bind(this, 'newPassword'),
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

  onFocus(field: FieldsType, event: FocusEvent): void {
    const target = <HTMLInputElement>event.target;

    this.validator.execute(field, target.value);

    const errors = this.validator.getErrors();

    validateField<FieldsType>(field, this.fields, errors);
  }

  onRepeatPasswordFocus(event: FocusEvent): void {
    const newPassword = this.children.newPasswordInput
      .getContent().querySelector('input')!;

    const target = <HTMLInputElement>event.target;

    this.validator.execute('repeatNewPassword', target.value, newPassword.value);

    const errors = this.validator.getErrors();

    validateField<FieldsType>('repeatNewPassword', this.fields, errors);
  }

  onSubmit(event: SubmitEvent): void {
    event.preventDefault();

    const formData = new FormData(<HTMLFormElement>event.target);
    const data = <FormFieldsType>Object.fromEntries(formData);

    this.validator.execute('oldPassword', data.oldPassword);
    this.validator.execute('newPassword', data.newPassword);
    this.validator.execute('repeatNewPassword', data.repeatNewPassword, data.newPassword);

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
