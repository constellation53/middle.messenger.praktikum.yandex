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
import { InfoFormType, FormFieldsType, ChildrenType, FieldsType } from './types';
import { InfoValidator } from './utils/infoValidator';
import { validateField } from '../../../core/utils/validator/helpers/validateField';
import { validateFields } from '../../../core/utils/validator/helpers/validateFields';

type PropsType = InfoFormType;

export class InfoFormComponent extends Block<PropsType, ChildrenType> {
  protected readonly validator = new InfoValidator();

  protected readonly fields: Record<FieldsType, Input> = {
    email: this.children.emailInput,
    login: this.children.loginInput,
    first_name: this.children.firstNameInput,
    second_name: this.children.secondNameInput,
    display_name: this.children.displayNameInput,
    phone: this.children.phoneInput,
  };

  constructor(props: PropsType = {}) {
    super(props);
  }

  init(): void {
    this.children.emailInput = new Input({
      id: 'email',
      name: 'email',
      label: 'Почта',
      value: 'pochta@yandex.ru',
      horizontal: true,
      disabled: this.props.disabled,
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
      horizontal: true,
      disabled: this.props.disabled,
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
      horizontal: true,
      disabled: this.props.disabled,
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
      horizontal: true,
      disabled: this.props.disabled,
      events: {
        focus: this.onFocus.bind(this, 'second_name'),
        blur: this.onFocus.bind(this, 'second_name'),
      },
    });

    this.children.displayNameInput = new Input({
      id: 'display_name',
      name: 'display_name',
      label: 'Имя в чате',
      value: 'Иван',
      horizontal: true,
      disabled: this.props.disabled,
      events: {
        focus: this.onFocus.bind(this, 'display_name'),
        blur: this.onFocus.bind(this, 'display_name'),
      },
    });

    this.children.phoneInput = new Input({
      id: 'phone',
      name: 'phone',
      label: 'Телефон',
      value: '+79099673030',
      horizontal: true,
      disabled: this.props.disabled,
      events: {
        focus: this.onFocus.bind(this, 'phone'),
        blur: this.onFocus.bind(this, 'phone'),
      },
    });

    this.children.emailDivider = new Divider();

    this.children.loginDivider = new Divider();

    this.children.firstNameDivider = new Divider();

    this.children.secondNameDivider = new Divider();

    this.children.displayNameDivider = new Divider();

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

  onSubmit(event: SubmitEvent): void {
    event.preventDefault();

    const formData = new FormData(<HTMLFormElement>event.target);
    const data = <FormFieldsType>Object.fromEntries(formData);

    this.validator.execute('email', data.email);
    this.validator.execute('login', data.login);
    this.validator.execute('first_name', data.first_name);
    this.validator.execute('second_name', data.second_name);
    this.validator.execute('display_name', data.display_name);
    this.validator.execute('phone', data.phone);

    const errors = this.validator.getErrors();

    validateFields(this.fields, errors);
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
