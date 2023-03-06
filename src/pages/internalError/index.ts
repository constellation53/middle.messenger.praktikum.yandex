import Block from '../../modules/core/utils/block';
import { ErrorBox } from '../../modules/core/elements/errorBox';
import template from './index.hbs';
import { render } from '../../modules/core/utils/render';
import styles from './styles/index.module.scss'

export class InternalErrorPage extends Block {
  constructor() {
    super();
  }

  init(): void {
    this.children.errorBox = new ErrorBox({
      code: 500,
      text: 'Мы уже фиксим',
      buttonProps: {
        text: 'Назад к чатам',
        href: 'test',
      },
    });
  }

  render(): DocumentFragment {
    return this.compile(template, { styles });
  }
}

const internalErrorPage = new InternalErrorPage();

render('#root', internalErrorPage);
