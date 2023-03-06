// Infrastructure
import Block from '../../modules/core/utils/block';

// Templates
import template from './index.hbs';

// Other
import { ErrorBox } from '../../modules/core/elements/errorBox';
import { render } from '../../modules/core/utils/render';
import styles from './styles/index.module.scss';

export class NotFoundPage extends Block {
  constructor() {
    super();
  }

  init(): void {
    this.children.errorBox = new ErrorBox({
      code: 404,
      text: 'Не туда попали',
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

const notFoundPage = new NotFoundPage();

render('#root', notFoundPage);
