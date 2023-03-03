import Block from '../../utils/block';
import template from './index.hbs';
import styles from './styles/index.module.scss';
import { NavType } from './types';

type PropsType = NavType;

export class NavComponent extends Block<NavType> {
  constructor(props: PropsType) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}