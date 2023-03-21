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
import { InfoFormType, FormFieldsType } from './types';
import { InfoValidator } from './utils/infoValidator';

type PropsType = InfoFormType;

export class InfoFormComponent extends Block<PropsType> {
  protected readonly validator = new InfoValidator();

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
      horizontal: true,
      disabled: this.props.disabled,
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

    this.children.firstNameInput = new Input({
      id: 'first_name',
      name: 'first_name',
      label: 'Имя',
      value: 'Иван',
      horizontal: true,
      disabled: this.props.disabled,
      events: {
        focus: (event): void => {
          const target = <HTMLInputElement>event.target;

          this.validator.execute('first_name', target);

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
      horizontal: true,
      disabled: this.props.disabled,
    });

    this.children.displayNameInput = new Input({
      id: 'display_name',
      name: 'display_name',
      label: 'Имя в чате',
      value: 'Иван',
      horizontal: true,
      disabled: this.props.disabled,
      events: {
        focus: (event): void => {
          const target = <HTMLInputElement>event.target;

          this.validator.execute('display_name', target);

          const errors = this.validator.getErrors();

          // eslint-disable-next-line no-console
          console.log('errors => ', errors);
        },
        blur: (event): void => {
          const target = <HTMLInputElement>event.target;

          this.validator.execute('display_name', target.value);

          const errors = this.validator.getErrors();

          // eslint-disable-next-line no-console
          console.log('errors => ', errors);
        },
      }
    });

    this.children.phoneInput = new Input({
      id: 'phone',
      name: 'phone',
      label: 'Телефон',
      value: '+7 (909) 967 30 30',
      horizontal: true,
      disabled: this.props.disabled,
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

  onSubmit(event: SubmitEvent): void {
    event.preventDefault();

    const formData = new FormData(<HTMLFormElement>event.target);
    const data = <FormFieldsType>Object.fromEntries(formData);

    this.validator.execute('email', data.email);
    this.validator.execute('login', data.login);
    this.validator.execute('first_name', data.first_name);

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
