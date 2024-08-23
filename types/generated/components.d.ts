import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksAccordionConfigurations extends Schema.Component {
  collectionName: 'components_blocks_accordion_configurations';
  info: {
    displayName: 'Accordion configurations';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    title: Attribute.String;
    configurations: Attribute.Component<
      'elements.accordion-item-configuration',
      true
    >;
  };
}

export interface BlocksAccordionDownloads extends Schema.Component {
  collectionName: 'components_blocks_accordion_downloads';
  info: {
    displayName: 'Accordion downloads';
    icon: 'bulletList';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    title: Attribute.String;
    downloads: Attribute.Component<'elements.accordion-item-download', true>;
  };
}

export interface BlocksAnchorMenu extends Schema.Component {
  collectionName: 'components_blocks_anchor_menus';
  info: {
    displayName: 'Anchor menu';
    icon: 'hashtag';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    anchors: Attribute.Component<'elements.anchor-item', true>;
  };
}

export interface BlocksAnchor extends Schema.Component {
  collectionName: 'components_blocks_anchors';
  info: {
    displayName: 'Anchor';
    icon: 'hashtag';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface BlocksBreadcrumbs extends Schema.Component {
  collectionName: 'components_blocks_breadcrumbs';
  info: {
    displayName: 'Breadcrumbs';
    icon: 'stack';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    links: Attribute.Component<'elements.link', true>;
  };
}

export interface BlocksButton extends Schema.Component {
  collectionName: 'components_blocks_buttons';
  info: {
    displayName: 'Button';
    icon: 'link';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    link: Attribute.Component<'elements.link'>;
  };
}

export interface BlocksDesignersList extends Schema.Component {
  collectionName: 'components_blocks_designers_lists';
  info: {
    displayName: 'Designers list';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    loadMoreText: Attribute.String;
  };
}

export interface BlocksDownloadDocuments extends Schema.Component {
  collectionName: 'components_blocks_download_documents';
  info: {
    displayName: 'Download documents';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    title: Attribute.String;
  };
}

export interface BlocksDownloadProductFiles extends Schema.Component {
  collectionName: 'components_blocks_download_product_files';
  info: {
    displayName: 'Download product files';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    title: Attribute.String;
  };
}

export interface BlocksDownloadProducts extends Schema.Component {
  collectionName: 'components_blocks_download_products';
  info: {
    displayName: 'Download products';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    title: Attribute.String;
  };
}

export interface BlocksDownloadSingle extends Schema.Component {
  collectionName: 'components_blocks_download_singles';
  info: {
    displayName: 'Download single';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    downloadFile: Attribute.Component<'elements.download-file'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    multimedia: Attribute.Component<'elements.multimedia'>;
  };
}

export interface BlocksForm extends Schema.Component {
  collectionName: 'components_blocks_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.Blocks;
  };
}

export interface BlocksHeadlineText extends Schema.Component {
  collectionName: 'components_blocks_headline_texts';
  info: {
    displayName: 'Headline text';
    icon: 'feather';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    headline: Attribute.Blocks;
    text: Attribute.Blocks;
    link: Attribute.Component<'elements.link'>;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    icon: 'picture';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.Blocks;
    multimedia: Attribute.Component<'elements.multimedia'>;
  };
}

export interface BlocksHorizontalTabs extends Schema.Component {
  collectionName: 'components_blocks_horizontal_tabs';
  info: {
    displayName: 'Horizontal tabs';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    title: Attribute.Blocks;
    tabs: Attribute.Component<'elements.tab', true>;
  };
}

export interface BlocksHorizontaltabs extends Schema.Component {
  collectionName: 'components_blocks_horizontal_tabs';
  info: {
    displayName: 'Horizontal tabs';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    title: Attribute.Blocks;
    tabs: Attribute.Component<'elements.tab', true>;
  };
}

export interface BlocksHotspotImage extends Schema.Component {
  collectionName: 'components_blocks_hotspot_images';
  info: {
    displayName: 'Hotspot image';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    title: Attribute.String;
    desktopImage: Attribute.Component<'elements.image'>;
    desktopHotspots: Attribute.Component<'elements.hotspot', true>;
    mobileImage: Attribute.Component<'elements.image'>;
    mobileHotspots: Attribute.Component<'elements.hotspot', true>;
  };
}

export interface BlocksJournalList extends Schema.Component {
  collectionName: 'components_blocks_journal_lists';
  info: {
    displayName: 'Journal list';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    loadMoreText: Attribute.String;
  };
}

export interface BlocksMarqueeText extends Schema.Component {
  collectionName: 'components_blocks_marquee_texts';
  info: {
    displayName: 'Marquee text';
    icon: 'feather';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean;
    text: Attribute.String;
  };
}

export interface BlocksMasonryGallery extends Schema.Component {
  collectionName: 'components_blocks_masonry_galleries';
  info: {
    displayName: 'Masonry gallery';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean;
    multimedia: Attribute.Component<'elements.multimedia', true> &
      Attribute.SetMinMax<
        {
          max: 6;
        },
        number
      >;
  };
}

export interface BlocksMaterialList extends Schema.Component {
  collectionName: 'components_blocks_materials_lists';
  info: {
    displayName: 'Materials list';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    materialsShownDesktop: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Attribute.DefaultTo<1>;
    materialsShownMobile: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Attribute.DefaultTo<1>;
    loadMoreText: Attribute.String;
  };
}

export interface BlocksMaterialsList extends Schema.Component {
  collectionName: 'components_blocks_materials_lists';
  info: {
    displayName: 'Materials list';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    loadMoreText: Attribute.String;
  };
}

export interface BlocksMediaText extends Schema.Component {
  collectionName: 'components_blocks_media_texts';
  info: {
    displayName: 'Media text';
    icon: 'quote';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.Blocks;
    link: Attribute.Component<'elements.link'>;
    multimedia: Attribute.Component<'elements.multimedia'>;
  };
}

export interface BlocksProjectInfo extends Schema.Component {
  collectionName: 'components_blocks_project_infos';
  info: {
    displayName: 'Project info';
    icon: 'bulletList';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface BlocksProjectsList extends Schema.Component {
  collectionName: 'components_blocks_projects_lists';
  info: {
    displayName: 'Projects list';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    loadMoreText: Attribute.String;
  };
}

export interface BlocksQuoteMedia extends Schema.Component {
  collectionName: 'components_blocks_quote_media';
  info: {
    displayName: 'Quote media';
    icon: 'quote';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    title: Attribute.String;
    text: Attribute.Text;
    subtext: Attribute.Blocks;
    link: Attribute.Component<'elements.link'>;
    multimedia: Attribute.Component<'elements.multimedia'>;
  };
}

export interface BlocksQuote extends Schema.Component {
  collectionName: 'components_blocks_quotes';
  info: {
    displayName: 'Quote';
    icon: 'quote';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.Text;
    subtext: Attribute.Blocks;
    link: Attribute.Component<'elements.link'>;
  };
}

export interface BlocksSingleMediaText extends Schema.Component {
  collectionName: 'components_blocks_single_media_texts';
  info: {
    displayName: 'Single media text';
    icon: 'picture';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.Blocks;
    link: Attribute.Component<'elements.link'>;
    multimedia: Attribute.Component<'elements.multimedia'>;
  };
}

export interface BlocksSingleMedia extends Schema.Component {
  collectionName: 'components_blocks_single_media';
  info: {
    displayName: 'Single media';
    icon: 'picture';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    fullWidth: Attribute.Boolean & Attribute.DefaultTo<false>;
    multimedia: Attribute.Component<'elements.multimedia'>;
  };
}

export interface BlocksSliderCards extends Schema.Component {
  collectionName: 'components_blocks_slider_cards';
  info: {
    displayName: 'Slider cards';
    icon: 'arrowRight';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    cardsPerViewDesktop: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<3.5>;
    cardsPerViewMobile: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<2.1>;
    cards: Attribute.Component<'elements.card', true> &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface BlocksSliderTeamCards extends Schema.Component {
  collectionName: 'components_blocks_slider_team_cards';
  info: {
    displayName: 'Slider team cards';
    icon: 'arrowRight';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    cards: Attribute.Component<'elements.team-card', true> &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface BlocksSpacer extends Schema.Component {
  collectionName: 'components_blocks_spacers';
  info: {
    displayName: 'Spacer';
    icon: 'filter';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    pxDesktop: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    pxMobile: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    backgroundColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface BlocksTable extends Schema.Component {
  collectionName: 'components_blocks_tables';
  info: {
    displayName: 'Table';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    title: Attribute.String;
    rows: Attribute.Component<'elements.table-row', true>;
  };
}

export interface BlocksTabs extends Schema.Component {
  collectionName: 'components_blocks_tabs';
  info: {
    displayName: 'Tabs';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    title: Attribute.String;
    tabs: Attribute.Component<'elements.tab', true>;
  };
}

export interface BlocksText extends Schema.Component {
  collectionName: 'components_blocks_texts';
  info: {
    displayName: 'Text';
    icon: 'feather';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.Blocks;
    link: Attribute.Component<'elements.link'>;
    chip: Attribute.Component<'elements.link'>;
  };
}

export interface BlocksThreeColumnsCards extends Schema.Component {
  collectionName: 'components_blocks_three_columns_cards';
  info: {
    displayName: 'Three columns cards';
    icon: 'apps';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    cards: Attribute.Component<'elements.card', true> &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 3;
        },
        number
      >;
  };
}

export interface BlocksTitle extends Schema.Component {
  collectionName: 'components_blocks_titles';
  info: {
    displayName: 'Title';
    description: '';
    icon: 'feather';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    alignment: Attribute.Enumeration<['Left', 'Center', 'Right']> &
      Attribute.DefaultTo<'Left'>;
    text: Attribute.Blocks;
  };
}

export interface BlocksTwoColumnsCards extends Schema.Component {
  collectionName: 'components_elements_two_columns_cards';
  info: {
    displayName: 'Two columns cards';
    icon: 'grid';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    reverseColumnsOrder: Attribute.Boolean & Attribute.DefaultTo<false>;
    cards: Attribute.Component<'elements.card', true> &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 2;
        },
        number
      >;
  };
}

export interface BlocksTwoMediaMasonryText extends Schema.Component {
  collectionName: 'components_blocks_two_media_masonry_texts';
  info: {
    displayName: 'Two media masonry text';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    reverseColumnsOrder: Attribute.Boolean & Attribute.DefaultTo<false>;
    title: Attribute.String;
    text: Attribute.Blocks;
    link: Attribute.Component<'elements.link'>;
    multimedia: Attribute.Component<'elements.multimedia', true> &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 2;
        },
        number
      >;
  };
}

export interface BlocksTwoMediaMasonry extends Schema.Component {
  collectionName: 'components_blocks_two_media_masonry';
  info: {
    displayName: 'Two media masonry';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    reverseColumnsOrder: Attribute.Boolean & Attribute.DefaultTo<false>;
    multimediaLeft: Attribute.Component<'elements.multimedia', true> &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    multimediaRight: Attribute.Component<'elements.multimedia', true> &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface BlocksTwoMediaText extends Schema.Component {
  collectionName: 'components_blocks_two_media_texts';
  info: {
    displayName: 'Two media text';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    reverseColumnsOrder: Attribute.Boolean & Attribute.DefaultTo<false>;
    spaceBetweenColumns: Attribute.Boolean & Attribute.DefaultTo<true>;
    title: Attribute.String;
    text: Attribute.Blocks;
    link: Attribute.Component<'elements.link'>;
    multimedia: Attribute.Component<'elements.multimedia', true> &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 2;
        },
        number
      >;
  };
}

export interface BlocksTwoMedia extends Schema.Component {
  collectionName: 'components_blocks_two_media';
  info: {
    displayName: 'Two media';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    reverseColumnsOrder: Attribute.Boolean & Attribute.DefaultTo<false>;
    spaceBetweenColumns: Attribute.Boolean & Attribute.DefaultTo<true>;
    title: Attribute.String;
    text: Attribute.Blocks;
    link: Attribute.Component<'elements.link'>;
    multimedia: Attribute.Component<'elements.multimedia', true> &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 2;
        },
        number
      >;
  };
}

export interface BlocksTwoTexts extends Schema.Component {
  collectionName: 'components_blocks_two_texts';
  info: {
    displayName: 'Two texts';
    icon: 'feather';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    textOne: Attribute.Blocks;
    textTwo: Attribute.Blocks;
  };
}

export interface BlocksVerticalTabs extends Schema.Component {
  collectionName: 'components_blocks_vertical_tabs';
  info: {
    displayName: 'Vertical tabs';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    title: Attribute.Blocks;
    tabs: Attribute.Component<'elements.tab', true>;
  };
}

export interface BlocksVerticaltabs extends Schema.Component {
  collectionName: 'components_blocks_vertical_tabs';
  info: {
    displayName: 'Vertical tabs';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    title: Attribute.Blocks;
    tabs: Attribute.Component<'elements.tab', true>;
  };
}

export interface ElementsAccordionItemConfiguration extends Schema.Component {
  collectionName: 'components_elements_accordion_item_configurations';
  info: {
    displayName: 'Accordion item configuration';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Blocks;
    multimedia: Attribute.Component<'elements.multimedia'>;
  };
}

export interface ElementsAccordionItemDownload extends Schema.Component {
  collectionName: 'components_elements_accordion_item_downloads';
  info: {
    displayName: 'Accordion item download';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    multimedia: Attribute.Component<'elements.multimedia'>;
    file: Attribute.String;
  };
}

export interface ElementsAnchorItem extends Schema.Component {
  collectionName: 'components_elements_anchor-item';
  info: {
    displayName: 'Anchor item';
    description: '';
    icon: 'hashtag';
  };
  attributes: {
    text: Attribute.String;
    anchorId: Attribute.String;
  };
}

export interface ElementsAnchor extends Schema.Component {
  collectionName: 'components_elements_anchors';
  info: {
    displayName: 'Anchor';
    description: '';
    icon: 'hashtag';
  };
  attributes: {
    text: Attribute.String;
    anchorId: Attribute.String;
  };
}

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
    icon: 'stack';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    text: Attribute.Blocks;
    chipPosition: Attribute.Enumeration<['BottomRight', 'TopLeft']>;
    chip: Attribute.String;
    link: Attribute.Component<'elements.link'>;
    multimedia: Attribute.Component<'elements.multimedia'>;
    multimediaHover: Attribute.Component<'elements.multimedia'>;
  };
}

export interface ElementsDownloadFile extends Schema.Component {
  collectionName: 'components_elements_download_files';
  info: {
    displayName: 'Download file';
    icon: 'attachment';
  };
  attributes: {
    name: Attribute.String;
    file: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ElementsHotspot extends Schema.Component {
  collectionName: 'components_elements_hotspots';
  info: {
    displayName: 'Hotspot';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    xCoordinates: Attribute.Float;
    yCoordinates: Attribute.Float;
    text: Attribute.Blocks;
  };
}

export interface ElementsImage extends Schema.Component {
  collectionName: 'components_elements_images';
  info: {
    displayName: 'Image';
    description: '';
    icon: 'picture';
  };
  attributes: {
    media: Attribute.Media<'images'>;
    alt: Attribute.String;
  };
}

export interface ElementsLinkImage extends Schema.Component {
  collectionName: 'components_elements_link_images';
  info: {
    displayName: 'Link image';
    description: '';
    icon: 'link';
  };
  attributes: {
    link: Attribute.Component<'elements.link'>;
    image: Attribute.Component<'elements.image'>;
  };
}

export interface ElementsLink extends Schema.Component {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
    description: '';
    icon: 'link';
  };
  attributes: {
    text: Attribute.String;
    url: Attribute.String;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ElementsMultimedia extends Schema.Component {
  collectionName: 'components_elements_multimedia';
  info: {
    displayName: 'Multimedia';
    description: '';
    icon: 'landscape';
  };
  attributes: {
    internalTitle: Attribute.String;
    desktopImage: Attribute.Component<'elements.image'>;
    mobileImage: Attribute.Component<'elements.image'>;
    showVideo: Attribute.Boolean & Attribute.DefaultTo<false>;
    desktopVideo: Attribute.Component<'elements.video'>;
    mobileVideo: Attribute.Component<'elements.video'>;
  };
}

export interface ElementsTab extends Schema.Component {
  collectionName: 'components_elements_tabs';
  info: {
    displayName: 'Tab';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Blocks;
  };
}

export interface ElementsTableRow extends Schema.Component {
  collectionName: 'components_elements_table_rows';
  info: {
    displayName: 'Table row';
    icon: 'bulletList';
  };
  attributes: {
    textLeft: Attribute.String;
    textRight: Attribute.String;
    link: Attribute.Component<'elements.link'>;
    multimediaHover: Attribute.Component<'elements.multimedia'>;
  };
}

export interface ElementsTeamCard extends Schema.Component {
  collectionName: 'components_elements_team_cards';
  info: {
    displayName: 'Team card';
    icon: 'stack';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    name: Attribute.Blocks;
    textHover: Attribute.Blocks;
    multimedia: Attribute.Component<'elements.multimedia'>;
  };
}

export interface ElementsVideo extends Schema.Component {
  collectionName: 'components_elements_videos';
  info: {
    displayName: 'Video';
    description: '';
    icon: 'play';
  };
  attributes: {
    autoplay: Attribute.Boolean & Attribute.DefaultTo<false>;
    portrait: Attribute.Boolean & Attribute.DefaultTo<false>;
    poster: Attribute.Media<'images'>;
    media: Attribute.Media<'videos'>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    index: Attribute.Boolean & Attribute.DefaultTo<true>;
    follow: Attribute.Boolean & Attribute.DefaultTo<true>;
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.accordion-configurations': BlocksAccordionConfigurations;
      'blocks.accordion-downloads': BlocksAccordionDownloads;
      'blocks.anchor-menu': BlocksAnchorMenu;
      'blocks.anchor': BlocksAnchor;
      'blocks.breadcrumbs': BlocksBreadcrumbs;
      'blocks.button': BlocksButton;
      'blocks.designers-list': BlocksDesignersList;
      'blocks.download-documents': BlocksDownloadDocuments;
      'blocks.download-product-files': BlocksDownloadProductFiles;
      'blocks.download-products': BlocksDownloadProducts;
      'blocks.download-single': BlocksDownloadSingle;
      'blocks.form': BlocksForm;
      'blocks.headline-text': BlocksHeadlineText;
      'blocks.hero': BlocksHero;
      'blocks.horizontal-tabs': BlocksHorizontalTabs;
      'blocks.horizontaltabs': BlocksHorizontaltabs;
      'blocks.hotspot-image': BlocksHotspotImage;
      'blocks.journal-list': BlocksJournalList;
      'blocks.marquee-text': BlocksMarqueeText;
      'blocks.masonry-gallery': BlocksMasonryGallery;
      'blocks.material-list': BlocksMaterialList;
      'blocks.materials-list': BlocksMaterialsList;
      'blocks.media-text': BlocksMediaText;
      'blocks.project-info': BlocksProjectInfo;
      'blocks.projects-list': BlocksProjectsList;
      'blocks.quote-media': BlocksQuoteMedia;
      'blocks.quote': BlocksQuote;
      'blocks.single-media-text': BlocksSingleMediaText;
      'blocks.single-media': BlocksSingleMedia;
      'blocks.slider-cards': BlocksSliderCards;
      'blocks.slider-team-cards': BlocksSliderTeamCards;
      'blocks.spacer': BlocksSpacer;
      'blocks.table': BlocksTable;
      'blocks.tabs': BlocksTabs;
      'blocks.text': BlocksText;
      'blocks.three-columns-cards': BlocksThreeColumnsCards;
      'blocks.title': BlocksTitle;
      'blocks.two-columns-cards': BlocksTwoColumnsCards;
      'blocks.two-media-masonry-text': BlocksTwoMediaMasonryText;
      'blocks.two-media-masonry': BlocksTwoMediaMasonry;
      'blocks.two-media-text': BlocksTwoMediaText;
      'blocks.two-media': BlocksTwoMedia;
      'blocks.two-texts': BlocksTwoTexts;
      'blocks.vertical-tabs': BlocksVerticalTabs;
      'blocks.verticaltabs': BlocksVerticaltabs;
      'elements.accordion-item-configuration': ElementsAccordionItemConfiguration;
      'elements.accordion-item-download': ElementsAccordionItemDownload;
      'elements.anchor-item': ElementsAnchorItem;
      'elements.anchor': ElementsAnchor;
      'elements.card': ElementsCard;
      'elements.download-file': ElementsDownloadFile;
      'elements.hotspot': ElementsHotspot;
      'elements.image': ElementsImage;
      'elements.link-image': ElementsLinkImage;
      'elements.link': ElementsLink;
      'elements.multimedia': ElementsMultimedia;
      'elements.tab': ElementsTab;
      'elements.table-row': ElementsTableRow;
      'elements.team-card': ElementsTeamCard;
      'elements.video': ElementsVideo;
      'shared.seo': SharedSeo;
    }
  }
}
