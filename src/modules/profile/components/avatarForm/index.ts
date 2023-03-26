// Core
import { Block } from '../../../core/utils/block';

// Elements
import { Input } from '../../../core/elements/input';
import { Button } from '../../../core/elements/button';
import { Error } from './error';

// Templates
import template from './index.hbs';

// Other
import * as styles from './styles/index.module.scss';
import { AvatarValidator } from './utils/avatarValidator';
import { ChildrenType, FieldsType, FormFieldsType } from './types';

export class AvatarFormComponent extends Block<never, ChildrenType> {
  protected readonly validator = new AvatarValidator();

  protected readonly fields: Record<FieldsType, Input> = { avatar: this.children.avatarInput };

  constructor() {
    super();
  }

  onChooseFileButtonClick(): void {
    const ref = this.children.avatarInput.getContent();

    ref.click();
  }

  onFileChose(event: Event): void {
    const target = <HTMLInputElement>event.target;
    const [file] = target.files || [];

    // eslint-disable-next-line no-console
    console.log(file);
  }

  onSubmit(event: SubmitEvent): void {
    event.preventDefault();

    const formData = new FormData(<HTMLFormElement>event.target);
    const data = <FormFieldsType>Object.fromEntries(formData);

    this.validator.execute('avatar', data.avatar);

    const errors = this.validator.getErrors();

    if (errors.avatar.error) {
      this.children.error.setProps({ message: errors.avatar.message });
    }

    // eslint-disable-next-line no-console
    console.log('data => ', data);
  }

  init(): void {
    this.children.chooseFileButton = new Button({
      text: 'Выбрать файл на компьютере',
      fluid: true,
      secondary: true,
      underline: true,
      class: 'size-8 font-weight-500',
      events: { click: this.onChooseFileButtonClick },
    });

    this.children.avatarInput = new Input({
      id: 'avatar',
      name: 'avatar',
      label: 'Загрузить фото',
      value: '•••••••••',
      htmlType: 'file',
      hidden: true,
      events: { change: this.onFileChose },
    });

    this.children.changeButton = new Button({
      text: 'Поменять',
      fluid: true,
      htmlType: 'submit',
    });

    this.children.error = new Error();
  }

  render(): HTMLElement {
    return this.compile(template, {
      styles,
      events: { submit: this.onSubmit.bind(this) },
    });
  }
}
