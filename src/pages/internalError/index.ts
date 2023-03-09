// Infrastructure
import Block from '../../modules/core/utils/block';

// Templates
import template from './index.hbs';

// Other
import { ErrorBox } from '../../modules/core/elements/errorBox';
import { render } from '../../modules/core/utils/render';
import * as styles from './styles/index.module.scss';

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

  render(): HTMLElement {
    return this.compile(template, { styles });
  }
}

const internalErrorPage = new InternalErrorPage();

render('#root', internalErrorPage);
