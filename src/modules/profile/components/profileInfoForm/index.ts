// Infrastructure
import Block from '../../../core/utils/block';

// Elements
import { Divider } from '../../../core/elements/divider';
import { Input } from '../../../core/elements/input';
import { Button } from '../../../core/elements/button';

// Templates
import template from './index.hbs';

// Other
import * as styles from './styles/index.module.scss';
import { ProfileInfoFormType } from './types';

type PropsType = ProfileInfoFormType;

export class ProfileInfoFormComponent extends Block<PropsType> {
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
    });

    this.children.loginInput = new Input({
      id: 'login',
      name: 'login',
      label: 'Логин',
      value: 'ivanivanov',
      horizontal: true,
      disabled: this.props.disabled,
    });

    this.children.firstNameInput = new Input({
      id: 'first_name',
      name: 'first_name',
      label: 'Имя',
      value: 'Иван',
      horizontal: true,
      disabled: this.props.disabled,
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
      fluid: true
    });
  }

  render(): HTMLElement {
    return this.compile(template, { ...this.props, styles });
  }
}
