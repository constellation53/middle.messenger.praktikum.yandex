import Block from '../../modules/core/utils/block';
import template from './index.hbs';
import { NavComponent } from '../../modules/core/components/nav';
import { routes } from '../../modules/core/config/routes';
import styles from './styles/index.module.scss';

export class MainPage extends Block {
  constructor() {
    super({});
  }

  init(): void {
    this.children.navigation = new NavComponent({ routes });
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
