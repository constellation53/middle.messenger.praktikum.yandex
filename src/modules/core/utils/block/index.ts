// Core
import { nanoid } from 'nanoid';
import { TemplateDelegate } from 'handlebars';
import { EventBus } from '../eventBus';

// Other
import {
  BlockEventBusType,
  BlockType,
  ChildrenType,
  EventEnum,
  ListenersType,
} from './types';
import { addEvents } from './helpers/addEvents';
import { removeEvents } from './helpers/removeEvents';
import { replaceStubs } from './helpers/replaceStub';
import { generateStub } from './helpers/generateStub';
import { divideProperties } from './helpers/divideProperties';
import { makePropsProxy } from './helpers/makePropsProxy';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export abstract class Block<P extends BlockType = any> {
  static EVENTS = EventEnum;

  private _element: HTMLElement;

  readonly id: string = nanoid(6);

  protected props: P;

  public children: ChildrenType;

  protected eventBus: BlockEventBusType<P>;

  protected constructor(properties?: P) {
    const eventBus = new EventBus();

    const { children, props } = divideProperties<P>(properties || ({} as P));

    this.eventBus = (): EventBus<ListenersType<P>> => eventBus;

    this.props = makePropsProxy({ ...props, id: this.id }, this.eventBus);

    this.children = children;

    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
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

  compile(
    template: TemplateDelegate,
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

  public getContent(): HTMLElement | null {
    return this.element;
  }

  public show(): void {
    this.getContent()!.style.display = 'block';
  }

  public hide(): void {
    this.getContent()!.style.display = 'none';
  }
}
