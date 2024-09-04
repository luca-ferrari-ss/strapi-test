// Interface automatically generated by schemas-to-ts

import { Image } from '../components/elements/Image';
import { Seo } from '../components/shared/Seo';
import { Image_Plain } from '../components/elements/Image';
import { Seo_Plain } from '../components/shared/Seo';
import { Image_NoRelations } from '../components/elements/Image';
import { Seo_NoRelations } from '../components/shared/Seo';

export interface Project {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    title?: string;
    slug?: string;
    transparentHeader?: boolean;
    spinningIcon?: boolean;
    keywords?: string;
    architect?: any;
    photographer?: any;
    products?: any;
    coverImage?: Image;
    seo?: Seo;
    blocks?: any;
    rank?: number;
    locale: string;
    localizations?: { data: Project[] };
  };
}
export interface Project_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  slug?: string;
  transparentHeader?: boolean;
  spinningIcon?: boolean;
  keywords?: string;
  architect?: any;
  photographer?: any;
  products?: any;
  coverImage?: Image_Plain;
  seo?: Seo_Plain;
  blocks?: any;
  rank?: number;
  locale: string;
  localizations?: Project_Plain[];
}

export interface Project_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  slug?: string;
  transparentHeader?: boolean;
  spinningIcon?: boolean;
  keywords?: string;
  architect?: any;
  photographer?: any;
  products?: any;
  coverImage?: Image_NoRelations;
  seo?: Seo_NoRelations;
  blocks?: any;
  rank?: number;
  locale: string;
  localizations?: Project[];
}

export interface Project_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  slug?: string;
  transparentHeader?: boolean;
  spinningIcon?: boolean;
  keywords?: string;
  architect?: any;
  photographer?: any;
  products?: any;
  coverImage?: Image_Plain;
  seo?: Seo_Plain;
  blocks?: any;
  rank?: number;
  locale: string;
  localizations?: Project[];
}
