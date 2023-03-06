import Block from '../../core/utils/block';
import template from './index.hbs';

export class AuthFormComponent extends Block {
  constructor() {
    super();
  }

  render(): DocumentFragment {
    return this.compile(template);
  }
}
