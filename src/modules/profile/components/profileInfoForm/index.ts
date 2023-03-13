// Infrastructure
import Block from '../../../core/utils/block';

// Elements
import { Divider } from '../../../core/elements/divider';

// Templates
import template from './index.hbs';

// Other
import * as styles from './styles/index.module.scss';
import { Input } from '../../../core/elements/input';

export class ProfileInfoFormComponent extends Block {
  constructor() {
    super();
  }

  init(): void {
    this.children.emailInput = new Input({
      id: 'email',
      name: 'email',
      label: 'Почта',
      value: 'pochta@yandex.ru',
      horizontal: true,
    });

    this.children.loginInput = new Input({
      id: 'login',
      name: 'login',
      label: 'Логин',
      value: 'ivanivanov',
      horizontal: true,
    });

    this.children.firstNameInput = new Input({
      id: 'first_name',
      name: 'first_name',
      label: 'Имя',
      value: 'Иван',
      horizontal: true,
    });

    this.children.secondNameInput = new Input({
      id: 'second_name',
      name: 'second_name',
      label: 'Фамилия',
      value: 'Иванов',
      horizontal: true,
    });

    this.children.phoneInput = new Input({
      id: 'phone',
      name: 'phone',
      label: 'Телефон',
      value: '+7 (909) 967 30 30',
      horizontal: true,
    });

    this.children.emailDivider = new Divider();

    this.children.loginDivider = new Divider();

    this.children.firstNameDivider = new Divider();

    this.children.secondNameDivider = new Divider();
  }

  render(): HTMLElement {
    return this.compile(template, { styles });
  }
}
