// Core
import { Block } from '../../../utils/block';

export type ModalType = {
  content: Block | Block<never>;
  opened?: boolean;
};
