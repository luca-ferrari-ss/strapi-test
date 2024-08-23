// Interface automatically generated by schemas-to-ts

import { Image } from '../elements/Image';
import { Hotspot } from '../elements/Hotspot';
import { Image_Plain } from '../elements/Image';
import { Hotspot_Plain } from '../elements/Hotspot';
import { Image_NoRelations } from '../elements/Image';
import { Hotspot_NoRelations } from '../elements/Hotspot';

export interface HotspotImage {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  title?: string;
  desktopImage?: Image;
  desktopHotspots: Hotspot[];
  mobileImage?: Image;
  mobileHotspots: Hotspot[];
}
export interface HotspotImage_Plain {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  title?: string;
  desktopImage?: Image_Plain;
  desktopHotspots: Hotspot_Plain[];
  mobileImage?: Image_Plain;
  mobileHotspots: Hotspot_Plain[];
}

export interface HotspotImage_NoRelations {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  title?: string;
  desktopImage?: Image_NoRelations;
  desktopHotspots: Hotspot_NoRelations[];
  mobileImage?: Image_NoRelations;
  mobileHotspots: Hotspot_NoRelations[];
}

