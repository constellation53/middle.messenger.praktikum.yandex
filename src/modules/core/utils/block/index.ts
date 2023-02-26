import { nanoid } from 'nanoid';
import { EventBus } from '../eventBus';
import { EventEnum, ListenersType, MetaType } from './types';

// Нельзя создавать экземпляр данного класса
export abstract class Block<P extends Record<string, any> = any> {
  static EVENTS = EventEnum;

  private _element: HTMLElement;

  private readonly _meta: MetaType<P>;

  private readonly _id: string;

  protected props: P;

  protected eventBus: () => EventBus<ListenersType>;

  constructor(tagName: string, props: P) {
    const eventBus = new EventBus();

    this._meta = {
      tagName,
      props,
    };

    this._id = nanoid(6);

    this.props = this._makePropsProxy({  ...props, __id: this._id });

    this.eventBus = (): EventBus<ListenersType> => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus: EventBus<ListenersType>): void {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _createResources(): void {
    const { tagName } = this._meta;

    this._element = this._createDocumentElement(tagName);
  }

  private _init(): void {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount(): void {
    this.componentDidMount();
  }

  // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-empty-function
  public componentDidMount(): void {}

  public dispatchComponentDidMount(): void {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private _componentDidUpdate(oldProps: P, newProps: P): void {}

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private componentDidUpdate(oldProps: P, newProps: P): boolean {
    return true;
  }

  private _addEvents(): void {
    const { events = {} } = this.props;

    const tuple =
      Object.entries<
        (
          this: HTMLElement,
          ev: HTMLElementEventMap[keyof HTMLElementEventMap]
        ) => any
      >(events);

    tuple.forEach(([name, listener]) => {
      this._element?.addEventListener(
        <keyof HTMLElementEventMap>name,
        listener
      );
    });
  }

  private _removeEvents(): void {
    const { events = {} } = this.props;

    const tuple =
      Object.entries<
        (
          this: HTMLElement,
          ev: HTMLElementEventMap[keyof HTMLElementEventMap]
        ) => any
      >(events);

    tuple.forEach(([name, listener]) => {
      this._element?.removeEventListener(
        <keyof HTMLElementEventMap>name,
        listener
      );
    });
  }

  public setProps = (nextProps: P): void => {
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

    if (this.props?.events) {
      this._removeEvents();
    }

    this._element.innerHTML = block;

    this._addEvents();
  }

  // Переопределяется пользователем. Необходимо вернуть разметку
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-empty-function
  protected render(): string {}

  public getContent(): HTMLElement | null {
    return this.element;
  }

  private _makePropsProxy(props: P): P {
    const proxy = new Proxy(props, {
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

    return proxy;
  }

  protected _createDocumentElement(tagName: string): HTMLElement {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    const element = document.createElement(tagName);

    if (this.props?.settings?.withInternalID) {
      element.setAttribute('data-id', this._id);
    }

    return element;
  }

  public show(): void {
    this.getContent()!.style.display = 'block';
  }

  public hide(): void {
    this.getContent()!.style.display = 'none';
  }
}

export default Block;
