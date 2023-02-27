import Block from '../../modules/core/utils/block';
import template from './template.hbs';
import { CoreBlockType } from '../../modules/core/utils/block/types';

type PropsType = CoreBlockType<{
  child: any;
}>;

export default class Home extends Block<PropsType> {
  constructor(props: PropsType) {
    // Создаём враппер DOM-элемент button
    super('div', props);
  }

  render(): DocumentFragment {
    // В данном случае render возвращает строкой разметку из шаблонизатора
    return this.compile(template, { child: this.props.child });
  }
}
