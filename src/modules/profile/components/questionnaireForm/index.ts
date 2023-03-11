// Infrastructure
import Block from '../../../core/utils/block';

// Templates
import template from './index.hbs';

export class QuestionnaireFormComponent extends Block {
  constructor() {
    super();
  }

  render(): HTMLElement {
    return this.compile(template);
  }
}
