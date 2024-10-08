// Interface automatically generated by schemas-to-ts

import { AnchorItem } from '../elements/AnchorItem';
import { AnchorItem_Plain } from '../elements/AnchorItem';
import { AnchorItem_NoRelations } from '../elements/AnchorItem';

export interface AnchorMenu {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  anchors: AnchorItem[];
}
export interface AnchorMenu_Plain {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  anchors: AnchorItem_Plain[];
}

export interface AnchorMenu_NoRelations {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  anchors: AnchorItem_NoRelations[];
}

