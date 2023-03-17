// Other
import {
  OptionsType as HTTPTransportOptionsType,
} from '../../httpTransport/types';

export type OptionsType = {
  tries?: number
} & HTTPTransportOptionsType;
