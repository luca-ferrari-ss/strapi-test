// Interface automatically generated by schemas-to-ts

import { Link } from '../elements/Link';
import { Multimedia } from '../elements/Multimedia';
import { Link_Plain } from '../elements/Link';
import { Multimedia_Plain } from '../elements/Multimedia';
import { Link_NoRelations } from '../elements/Link';
import { Multimedia_NoRelations } from '../elements/Multimedia';

export interface MediaText {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  text?: any;
  link?: Link;
  multimedia?: Multimedia;
}
export interface MediaText_Plain {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  text?: any;
  link?: Link_Plain;
  multimedia?: Multimedia_Plain;
}

export interface MediaText_NoRelations {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  text?: any;
  link?: Link_NoRelations;
  multimedia?: Multimedia_NoRelations;
}

