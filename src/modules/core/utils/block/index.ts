// Infrastructure
import { nanoid } from 'nanoid';
import { EventBus } from '../eventBus';

// Other
import {
  BlockType,
  ChildrenType,
  EventEnum,
  ListenersType,
} from './types';
import { addEvents } from './helpers/addEvents';
import { removeEvents } from './helpers/removeEvents';
import { replaceStubs } from './helpers/replaceStub';
import { generateStub } from './helpers/generateStub';
import { isBlockArrayClass } from '../guards/isBlockArrayClass';
import { isBlockClass } from '../guards/isBlockClass';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export abstract class Block<P extends BlockType = any> {
  static EVENTS = EventEnum;

  private _element: HTMLElement;

  readonly id: string = nanoid(6);

  protected props: P;

  public children: ChildrenType;

  protected eventBus: () => EventBus<ListenersType<P>>;

  protected constructor(properties?: P) {
    const eventBus = new EventBus();

    const { children, props } = this._getChildren(properties || ({} as P));

    this.props = this._makePropsProxy({ ...props, id: this.id });
    this.children = children;

    this.eventBus = (): EventBus<ListenersType<P>> => eventBus;

    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  compile(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    template: (context: any) => string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    context: BlockType = {},
  ): HTMLElement {
    const contextAndStubs = generateStub(context, this.children);

    const fragment = document.createElement('template');

    fragment.innerHTML = template(contextAndStubs);

    replaceStubs(fragment, this.children);

    if (contextAndStubs.events) {
      removeEvents(
        <HTMLElement>fragment.content.firstElementChild,
        contextAndStubs.events,
      );
    }

    if (contextAndStubs.events) {
      addEvents(
        <HTMLElement>fragment.content.firstElementChild,
        contextAndStubs.events,
      );
    }

    const element = <HTMLElement>fragment.content.firstElementChild;

    if (context.settings?.withInternalID) {
      element.setAttribute('data-id', this.id);
    }

    return <HTMLElement>fragment.content.firstElementChild;
  }

  private _registerEvents(eventBus: EventBus<ListenersType<P>>): void {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _init(): void {
    this.init();

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected init(): void {}

  private _getChildren(properties: P): {
    props: P;
    children: ChildrenType;
  } {
    const children: ChildrenType = {};
    const props: Record<string, unknown> = {};

    Object.entries(properties).forEach(([key, value]) => {
      if (isBlockArrayClass(value)) {
        children[key] = value;
      } else if (isBlockClass(value)) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return {
      props: props as P,
      children,
    };
  }

  private _componentDidMount(): void {
    this.componentDidMount();

    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((ch) => ch.dispatchComponentDidMount());
      } else {
        child.dispatchComponentDidMount();
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-empty-function
  public componentDidMount(): void {}

  public dispatchComponentDidMount(): void {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: P, newProps: P): void {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private componentDidUpdate(oldProps: P, newProps: P): boolean {
    return true;
  }

  public setProps = (nextProps: Partial<P>): void => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element(): HTMLElement | null {
    return this._element;
  }

  private _render(): void {
    const block = this.render();

    if (this._element && block) {
      this._element.replaceWith(block);
    }

    this._element = block;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-empty-function
  protected render(): HTMLElement {}

  public getContent(): HTMLElement | null {
    return this.element;
  }

  private _makePropsProxy(props: P): P {
    return new Proxy(props, {
      get: (target, property: string): P[string] => {
        const isFunction = typeof target[property] === 'function';

        return isFunction ? target[property].bind(this) : target[property];
      },
      set: (target, property: string, value): boolean => {
        const old = { ...target };

        // eslint-disable-next-line no-param-reassign
        target[property as keyof P] = value;

        this.eventBus().emit(EventEnum.FLOW_CDU, old, target);

        return true;
      },
    });
  }

  public show(): void {
    this.getContent()!.style.display = 'block';
  }

  public hide(): void {
    this.getContent()!.style.display = 'none';
  }
}

export default Block;
