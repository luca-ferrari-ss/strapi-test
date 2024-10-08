// Interface automatically generated by schemas-to-ts

import { Link } from '../elements/Link';
import { Link_Plain } from '../elements/Link';
import { Link_NoRelations } from '../elements/Link';

export interface HeadlineText {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  headline?: any;
  text?: any;
  link?: Link;
}
export interface HeadlineText_Plain {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  headline?: any;
  text?: any;
  link?: Link_Plain;
}

export interface HeadlineText_NoRelations {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  headline?: any;
  text?: any;
  link?: Link_NoRelations;
}

