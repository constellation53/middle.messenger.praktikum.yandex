// Infrastructure
import Block from '../../../core/utils/block';

// Templates
import template from './index.hbs';

export class Questionnaire extends Block {
  constructor() {
    super();
  }

  render(): HTMLElement {
    return this.compile(template);
  }
}
