import Block from '../../modules/core/utils/block';
import template from './index.hbs';
import { render } from "../../modules/core/utils/render";

export class SignInPage extends Block {
  constructor() {
    super();
  }

  render(): DocumentFragment {
    return this.compile(template);
  }
}

const signInPage = new SignInPage()

render('#root', signInPage)
