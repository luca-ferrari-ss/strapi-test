// Interface automatically generated by schemas-to-ts

import { Link } from '../elements/Link';
import { Link_Plain } from '../elements/Link';
import { Link_NoRelations } from '../elements/Link';

export interface Button {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  link?: Link;
}
export interface Button_Plain {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  link?: Link_Plain;
}

export interface Button_NoRelations {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  link?: Link_NoRelations;
}

