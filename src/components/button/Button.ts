import Block from '../../modules/core/utils/block';
import template from './template.hbs';

type PropsType = {
  child: string;
}

export default class Button extends Block<PropsType> {
  constructor(props: PropsType) {
    // Создаём враппер DOM-элемент button
    super('button', props);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type,class-methods-use-this
  render() {
    // В данном случае render возвращает строкой разметку из шаблонизатора
    return template(this.props)
  }
}
