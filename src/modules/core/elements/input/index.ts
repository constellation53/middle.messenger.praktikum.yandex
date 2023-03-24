// Core
import { Block } from '../../utils/block';

// Elements
import { Error } from './error';
import { Field } from './field';

// Templates
import template from './index.hbs';

// Other
import { ChildrenType, InputType } from './types';
import * as styles from './styles/index.module.scss';
import { Label } from './label';

type PropsType = InputType;

export class Input extends Block<PropsType, ChildrenType> {
  constructor(props: InputType) {
    super(props);
  }

  init(): void {
    this.children.field = new Field({
      events: this.props.events,
      disabled: this.props.disabled,
      value: this.props.value,
      id: this.props.id,
      name: this.props.name,
      htmlType: this.props.htmlType,
      validation: this.props.validation,
    });

    this.children.label = new Label({ label: this.props.label });

    if (this.props.validation?.message) {
      this.children.error = new Error({ message: this.props.validation.message });
    }
  }

  componentDidUpdate(prevProps: PropsType, newProps: PropsType): boolean {
    if (prevProps.validation?.message !== newProps.validation?.message) {
      this.children.error = new Error({ message: this.props.validation?.message });

      return true;
    }

    return false;
  }

  render(): HTMLElement {
    return this.compile(template, {
      ...this.props,
      styles,
    });
  }
}
