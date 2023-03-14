// Infrastructure
import Block from '../../../core/utils/block';

// Elements
import { Input } from '../../../core/elements/input';
import { Button } from '../../../core/elements/button';

// Templates
import template from './index.hbs';

// Other
import * as styles from './styles/index.module.scss';
import { isHTMLElement } from '../../../core/utils/guards/isHTMLElement';

export class AvatarFormComponent extends Block {
  constructor() {
    super();
  }

  onChooseFileButtonClick(): void {
    const ref = document.querySelector('input[type="file"]');

    if (isHTMLElement(ref)) {
      ref.click();
    }
  }

  onSubmit(event: SubmitEvent): void {
    event.preventDefault();

    const formData = new FormData(<HTMLFormElement>event.target);
    const data = Object.fromEntries(formData);
    // eslint-disable-next-line no-console
    console.log(data);
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
    });

    this.children.changeButton = new Button({
      text: 'Поменять',
      fluid: true,
      htmlType: 'submit',
    });
  }

  render(): HTMLElement {
    return this.compile(template, {
      ...this.props,
      styles,
      events: { submit: this.onSubmit },
    });
  }
}
