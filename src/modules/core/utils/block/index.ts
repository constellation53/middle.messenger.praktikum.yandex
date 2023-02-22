import { EventBus } from '../eventBus';
import { EventEnum, ListenersType, MetaType } from './types';
import { isHTMLElement } from '../guards/isHTMLElement';

// Нельзя создавать экземпляр данного класса
export class Block<P extends Record<string, any> = any> {
  static EVENTS = EventEnum;

  private _element: HTMLElement | null = null;

  private readonly _meta: MetaType<P> | null = null;

  protected  props: P;

  protected eventBus: () => EventBus<ListenersType>;

  constructor(tagName: string, props: P) {
    const eventBus = new EventBus();

    this._meta = {
      tagName,
      props,
    };

    this.props = this._makePropsProxy(props);

    this.eventBus = (): EventBus<ListenersType> => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus: EventBus<ListenersType>): void {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _createResources(): void {
    if (this._meta) {
      const { tagName } = this._meta;

      this._element = this._createDocumentElement(tagName);
    }
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

  public setProps = (nextProps: P): void => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element(): HTMLElement | null {
    return this._element;
  }

  _render(): void {
    const block = this.render();
    // Это небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно компилировать не в строку (или делать это правильно),
    // либо сразу превращать в DOM-элементы и возвращать из compile DOM-ноду

    if (isHTMLElement(this._element)) {
      this._element.innerHTML = block;
    }
  }

  // Переопределяется пользователем. Необходимо вернуть разметку
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-empty-function
  public render(): string {}

  public getContent(): HTMLElement | null {
    return this.element;
  }

  private _makePropsProxy(props: P): P {
    // Ещё один способ передачи this, но он больше не применяется с приходом ES6+
    // const self = this;

    // Здесь вам предстоит реализовать метод
    return props;
  }

  protected _createDocumentElement(tagName: string): HTMLElement {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  public show(): void {
    this.getContent()!.style.display = 'block';
  }

  public hide(): void {
    this.getContent()!.style.display = 'none';
  }
}

export default Block;
