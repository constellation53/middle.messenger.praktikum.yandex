import { nanoid } from 'nanoid';
import { EventBus } from '../eventBus';
import { EventEnum, ListenersType } from './types';
import { addEvents } from './helpers/addEvents';
import { removeEvents } from './helpers/removeEvents';
import { replaceStub } from './helpers/replaceStub';

// Нельзя создавать экземпляр данного класса
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export abstract class Block<P extends Record<string, any> = any> {
  static EVENTS = EventEnum;

  private _element: HTMLElement;

  readonly _id: string = nanoid(6);

  protected props: P;

  // eslint-disable-next-line no-use-before-define
  public children: Record<string, Block | Block[]>;

  protected eventBus: () => EventBus<ListenersType<P>>;

  protected constructor(properties?: P) {
    const eventBus = new EventBus();

    const { children, props } = this._getChildren(properties || ({} as P));

    this._id = nanoid(6);

    this.props = this._makePropsProxy({ ...props, __id: this._id });
    this.children = children;

    this.eventBus = (): EventBus<ListenersType<P>> => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  compile(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    template: (context: any) => string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    context: any = {}
  ): HTMLElement {
    const contextAndStubs = { ...context };

    Object.entries(this.children).forEach(([key, children]) => {
      if (Array.isArray(children)) {
        contextAndStubs[key] = children.map(
          (child) => `<div data-id="${child._id}"></div>`
        );
      } else {
        contextAndStubs[key] = `<div data-id="${children._id}"></div>`;
      }
    });

    const fragment = document.createElement('template');

    fragment.innerHTML = template(contextAndStubs);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(this.children).forEach(([_, component]) => {
      if (Array.isArray(component)) {
        component.forEach((item) => replaceStub(fragment, item));
      } else {
        replaceStub(fragment, component);
      }
    });

    if (contextAndStubs.events) {
      removeEvents(<HTMLElement>fragment.content.firstElementChild, contextAndStubs.events);
    }


    if (contextAndStubs.events) {
      addEvents(<HTMLElement>fragment.content.firstElementChild, contextAndStubs.events)
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
    children: Record<string, Block | Block[]>;
  } {
    const children: Record<string, Block | Block[]> = {};
    const props: Record<string, unknown> = {};

    Object.entries(properties).forEach(([key, value]) => {
      if (
        Array.isArray(value) &&
        value.length > 0 &&
        value.every((v) => v instanceof Block)
      ) {
        children[key] = value as Block[];
      } else if (value instanceof Block) {
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

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
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
    // Это небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно компилировать не в строку (или делать это правильно),
    // либо сразу превращать в DOM-элементы и возвращать из compile DOM-ноду


    if (this._element && block) {
      this._element.replaceWith(block);
    }

    this._element = block;
  }

  // Переопределяется пользователем. Необходимо вернуть разметку
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
        return typeof target[property] === 'function'
          ? target[property].bind(this)
          : target[property];
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
