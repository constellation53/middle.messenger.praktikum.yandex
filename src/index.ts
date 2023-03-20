import { render } from './modules/core/utils/render';
import { Block } from './modules/core/utils/block';
import { NavComponent } from './modules/core/components/nav';
import { routes } from './modules/core/config/routes';
import template from './index.hbs';
import * as styles from './styles/index.module.scss';

export class MainPage extends Block {
  constructor() {
    super();
  }

  init(): void {
    this.children.navigation = new NavComponent({ routes });
  }

  render(): HTMLElement {
    return this.compile(template, {
      ...this.props,
      styles,
    });
  }
}

const mainPage = new MainPage();

render('#root', mainPage);
