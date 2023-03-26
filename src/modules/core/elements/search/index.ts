// Core
import { Block } from '../../utils/block';

// Templates
import template from './index.hbs';

// Other
import { SearchType } from './types';
import * as styles from './styles/index.module.scss';

type PropsType = SearchType;

export class Search extends Block<PropsType> {
  constructor(props: SearchType) {
    super(props);
  }

  render(): HTMLElement {
    return this.compile(template, { ...this.props, styles });
  }
}
