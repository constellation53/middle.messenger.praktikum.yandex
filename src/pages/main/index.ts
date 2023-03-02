import Block from '../../modules/core/utils/block';
import template from './index.hbs';

export class MainPage extends Block {
  constructor() {
    super('section');
  }

  render(): DocumentFragment {
    return this.compile(template);
  }
}
