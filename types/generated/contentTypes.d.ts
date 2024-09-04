import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAgendaAgenda extends Schema.CollectionType {
  collectionName: 'agendas';
  info: {
    singularName: 'agenda';
    pluralName: 'agendas';
    displayName: 'Agenda';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.UID<'api::agenda.agenda', 'title'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    transparentHeader: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    spinningIcon: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    keywords: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    architect: Attribute.Blocks;
    photographer: Attribute.Blocks;
    products: Attribute.Blocks;
    coverImage: Attribute.Component<'elements.image'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    blocks: Attribute.DynamicZone<
      [
        'blocks.anchor',
        'blocks.anchor-menu',
        'blocks.breadcrumbs',
        'blocks.button',
        'blocks.designers-list',
        'blocks.download-documents',
        'blocks.download-product-files',
        'blocks.download-products',
        'blocks.download-single',
        'blocks.form',
        'blocks.headline-text',
        'blocks.hero',
        'blocks.horizontal-tabs',
        'blocks.hotspot-image',
        'blocks.journal-list',
        'blocks.marquee-text',
        'blocks.masonry-gallery',
        'blocks.materials-list',
        'blocks.media-text',
        'blocks.project-info',
        'blocks.projects-list',
        'blocks.quote-media',
        'blocks.quote',
        'blocks.single-media-text',
        'blocks.single-media',
        'blocks.slider-team-cards',
        'blocks.spacer',
        'blocks.table',
        'blocks.text',
        'blocks.three-columns-cards',
        'blocks.title',
        'blocks.two-columns-cards',
        'blocks.two-media-masonry-text',
        'blocks.two-media-masonry',
        'blocks.two-media-text',
        'blocks.vertical-tabs'
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    rank: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::agenda.agenda',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::agenda.agenda',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::agenda.agenda',
      'oneToMany',
      'api::agenda.agenda'
    >;
    locale: Attribute.String;
  };
}

export interface ApiContactsPageContactsPage extends Schema.SingleType {
  collectionName: 'contacts_pages';
  info: {
    singularName: 'contacts-page';
    pluralName: 'contacts-pages';
    displayName: 'Page - Contacts';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    slug: Attribute.UID &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<'contatti'>;
    transparentHeader: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    spinningIcon: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    blocks: Attribute.DynamicZone<
      [
        'blocks.anchor',
        'blocks.anchor-menu',
        'blocks.breadcrumbs',
        'blocks.button',
        'blocks.designers-list',
        'blocks.download-documents',
        'blocks.download-product-files',
        'blocks.download-products',
        'blocks.download-single',
        'blocks.form',
        'blocks.headline-text',
        'blocks.hero',
        'blocks.horizontal-tabs',
        'blocks.hotspot-image',
        'blocks.journal-list',
        'blocks.marquee-text',
        'blocks.masonry-gallery',
        'blocks.materials-list',
        'blocks.media-text',
        'blocks.project-info',
        'blocks.projects-list',
        'blocks.quote-media',
        'blocks.quote',
        'blocks.single-media-text',
        'blocks.single-media',
        'blocks.slider-team-cards',
        'blocks.spacer',
        'blocks.table',
        'blocks.text',
        'blocks.three-columns-cards',
        'blocks.title',
        'blocks.two-columns-cards',
        'blocks.two-media-masonry-text',
        'blocks.two-media-masonry',
        'blocks.two-media-text',
        'blocks.vertical-tabs'
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contacts-page.contacts-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contacts-page.contacts-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::contacts-page.contacts-page',
      'oneToMany',
      'api::contacts-page.contacts-page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiDesignFusionSessionPageDesignFusionSessionPage
  extends Schema.SingleType {
  collectionName: 'design_fusion_session_pages';
  info: {
    singularName: 'design-fusion-session-page';
    pluralName: 'design-fusion-session-pages';
    displayName: 'Page - Design fusion session';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    slug: Attribute.UID &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<'design-fusion-session'>;
    transparentHeader: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    spinningIcon: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    blocks: Attribute.DynamicZone<
      [
        'blocks.anchor',
        'blocks.anchor-menu',
        'blocks.breadcrumbs',
        'blocks.button',
        'blocks.designers-list',
        'blocks.download-documents',
        'blocks.download-product-files',
        'blocks.download-products',
        'blocks.download-single',
        'blocks.form',
        'blocks.headline-text',
        'blocks.hero',
        'blocks.horizontal-tabs',
        'blocks.hotspot-image',
        'blocks.journal-list',
        'blocks.marquee-text',
        'blocks.masonry-gallery',
        'blocks.materials-list',
        'blocks.media-text',
        'blocks.project-info',
        'blocks.projects-list',
        'blocks.quote-media',
        'blocks.quote',
        'blocks.single-media-text',
        'blocks.single-media',
        'blocks.slider-team-cards',
        'blocks.spacer',
        'blocks.table',
        'blocks.text',
        'blocks.three-columns-cards',
        'blocks.title',
        'blocks.two-columns-cards',
        'blocks.two-media-masonry-text',
        'blocks.two-media-masonry',
        'blocks.two-media-text',
        'blocks.vertical-tabs'
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::design-fusion-session-page.design-fusion-session-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::design-fusion-session-page.design-fusion-session-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::design-fusion-session-page.design-fusion-session-page',
      'oneToMany',
      'api::design-fusion-session-page.design-fusion-session-page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiDesignerDesigner extends Schema.CollectionType {
  collectionName: 'designers';
  info: {
    singularName: 'designer';
    pluralName: 'designers';
    displayName: 'Designer';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.UID<'api::designer.designer', 'title'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    transparentHeader: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    spinningIcon: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    keywords: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    products: Attribute.Relation<
      'api::designer.designer',
      'oneToMany',
      'api::product.product'
    >;
    coverImage: Attribute.Component<'elements.image'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    blocks: Attribute.DynamicZone<
      [
        'blocks.anchor',
        'blocks.anchor-menu',
        'blocks.breadcrumbs',
        'blocks.button',
        'blocks.designers-list',
        'blocks.download-documents',
        'blocks.download-product-files',
        'blocks.download-products',
        'blocks.download-single',
        'blocks.form',
        'blocks.headline-text',
        'blocks.hero',
        'blocks.horizontal-tabs',
        'blocks.hotspot-image',
        'blocks.journal-list',
        'blocks.marquee-text',
        'blocks.masonry-gallery',
        'blocks.materials-list',
        'blocks.media-text',
        'blocks.project-info',
        'blocks.projects-list',
        'blocks.quote-media',
        'blocks.quote',
        'blocks.single-media-text',
        'blocks.single-media',
        'blocks.slider-team-cards',
        'blocks.spacer',
        'blocks.table',
        'blocks.text',
        'blocks.three-columns-cards',
        'blocks.title',
        'blocks.two-columns-cards',
        'blocks.two-media-masonry-text',
        'blocks.two-media-masonry',
        'blocks.two-media-text',
        'blocks.vertical-tabs'
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    rank: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::designer.designer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::designer.designer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::designer.designer',
      'oneToMany',
      'api::designer.designer'
    >;
    locale: Attribute.String;
  };
}

export interface ApiDesignersPageDesignersPage extends Schema.SingleType {
  collectionName: 'designers_pages';
  info: {
    singularName: 'designers-page';
    pluralName: 'designers-pages';
    displayName: 'Page - Designers';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    slug: Attribute.UID &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<'designers'>;
    transparentHeader: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    spinningIcon: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    blocks: Attribute.DynamicZone<
      [
        'blocks.anchor',
        'blocks.anchor-menu',
        'blocks.breadcrumbs',
        'blocks.button',
        'blocks.designers-list',
        'blocks.download-documents',
        'blocks.download-product-files',
        'blocks.download-products',
        'blocks.download-single',
        'blocks.form',
        'blocks.headline-text',
        'blocks.hero',
        'blocks.horizontal-tabs',
        'blocks.hotspot-image',
        'blocks.journal-list',
        'blocks.marquee-text',
        'blocks.masonry-gallery',
        'blocks.materials-list',
        'blocks.media-text',
        'blocks.project-info',
        'blocks.projects-list',
        'blocks.quote-media',
        'blocks.quote',
        'blocks.single-media-text',
        'blocks.single-media',
        'blocks.slider-team-cards',
        'blocks.spacer',
        'blocks.table',
        'blocks.text',
        'blocks.three-columns-cards',
        'blocks.title',
        'blocks.two-columns-cards',
        'blocks.two-media-masonry-text',
        'blocks.two-media-masonry',
        'blocks.two-media-text',
        'blocks.vertical-tabs'
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::designers-page.designers-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::designers-page.designers-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::designers-page.designers-page',
      'oneToMany',
      'api::designers-page.designers-page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiDocumentDocument extends Schema.CollectionType {
  collectionName: 'documents';
  info: {
    singularName: 'document';
    pluralName: 'documents';
    displayName: 'Document';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    internalTitle: Attribute.String;
    year: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    downloadFile: Attribute.Component<'elements.download-file'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    rank: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::document.document',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::document.document',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::document.document',
      'oneToMany',
      'api::document.document'
    >;
    locale: Attribute.String;
  };
}

export interface ApiDownloadsPageDownloadsPage extends Schema.SingleType {
  collectionName: 'downloads_pages';
  info: {
    singularName: 'downloads-page';
    pluralName: 'downloads-pages';
    displayName: 'Page - Downloads';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    slug: Attribute.UID &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<'downloads'>;
    transparentHeader: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    spinningIcon: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    blocks: Attribute.DynamicZone<
      [
        'blocks.anchor',
        'blocks.anchor-menu',
        'blocks.breadcrumbs',
        'blocks.button',
        'blocks.designers-list',
        'blocks.download-documents',
        'blocks.download-product-files',
        'blocks.download-products',
        'blocks.download-single',
        'blocks.form',
        'blocks.headline-text',
        'blocks.hero',
        'blocks.horizontal-tabs',
        'blocks.hotspot-image',
        'blocks.journal-list',
        'blocks.marquee-text',
        'blocks.masonry-gallery',
        'blocks.materials-list',
        'blocks.media-text',
        'blocks.project-info',
        'blocks.projects-list',
        'blocks.quote-media',
        'blocks.quote',
        'blocks.single-media-text',
        'blocks.single-media',
        'blocks.slider-team-cards',
        'blocks.spacer',
        'blocks.table',
        'blocks.text',
        'blocks.three-columns-cards',
        'blocks.title',
        'blocks.two-columns-cards',
        'blocks.two-media-masonry-text',
        'blocks.two-media-masonry',
        'blocks.two-media-text',
        'blocks.vertical-tabs'
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::downloads-page.downloads-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::downloads-page.downloads-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::downloads-page.downloads-page',
      'oneToMany',
      'api::downloads-page.downloads-page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiFooterFooter extends Schema.SingleType {
  collectionName: 'footers';
  info: {
    singularName: 'footer';
    pluralName: 'footers';
    displayName: 'Layout - Footer';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    text: Attribute.Blocks &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    policyLinks: Attribute.Component<'elements.link', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    socialLinks: Attribute.Component<'elements.link', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    newsletterTitle: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    logo: Attribute.Component<'elements.image'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    copyright: Attribute.Blocks &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::footer.footer',
      'oneToMany',
      'api::footer.footer'
    >;
    locale: Attribute.String;
  };
}

export interface ApiHeaderHeader extends Schema.SingleType {
  collectionName: 'headers';
  info: {
    singularName: 'header';
    pluralName: 'headers';
    displayName: 'Layout - Header';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    logo: Attribute.Component<'elements.link-image'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    logoTransparent: Attribute.Component<'elements.link-image'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    headerLinks: Attribute.Component<'elements.link', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    hamburgerOpenText: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    hamburgerCloseText: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    hamburgerLinks: Attribute.Component<'elements.link', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    socialLinks: Attribute.Component<'elements.link', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    searchTitle: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    searchText: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    searchBackToMenuText: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    searchPlaceholderText: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    searchIcon: Attribute.Component<'elements.image'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::header.header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::header.header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::header.header',
      'oneToMany',
      'api::header.header'
    >;
    locale: Attribute.String;
  };
}

export interface ApiHomepageHomepage extends Schema.SingleType {
  collectionName: 'homepages';
  info: {
    singularName: 'homepage';
    pluralName: 'homepages';
    displayName: 'Page - Homepage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    slug: Attribute.UID &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    transparentHeader: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    spinningIcon: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    blocks: Attribute.DynamicZone<
      [
        'blocks.anchor',
        'blocks.anchor-menu',
        'blocks.breadcrumbs',
        'blocks.button',
        'blocks.designers-list',
        'blocks.download-documents',
        'blocks.download-product-files',
        'blocks.download-products',
        'blocks.download-single',
        'blocks.form',
        'blocks.headline-text',
        'blocks.hero',
        'blocks.horizontal-tabs',
        'blocks.hotspot-image',
        'blocks.journal-list',
        'blocks.marquee-text',
        'blocks.masonry-gallery',
        'blocks.materials-list',
        'blocks.media-text',
        'blocks.project-info',
        'blocks.projects-list',
        'blocks.quote-media',
        'blocks.quote',
        'blocks.single-media-text',
        'blocks.single-media',
        'blocks.slider-team-cards',
        'blocks.spacer',
        'blocks.table',
        'blocks.text',
        'blocks.three-columns-cards',
        'blocks.title',
        'blocks.two-columns-cards',
        'blocks.two-media-masonry-text',
        'blocks.two-media-masonry',
        'blocks.two-media-text',
        'blocks.vertical-tabs'
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::homepage.homepage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::homepage.homepage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::homepage.homepage',
      'oneToMany',
      'api::homepage.homepage'
    >;
    locale: Attribute.String;
  };
}

export interface ApiJournalJournal extends Schema.CollectionType {
  collectionName: 'journals';
  info: {
    singularName: 'journal';
    pluralName: 'journals';
    displayName: 'Journal';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.UID<'api::journal.journal', 'title'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    transparentHeader: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    spinningIcon: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    keywords: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    coverImage: Attribute.Component<'elements.image'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    blocks: Attribute.DynamicZone<
      [
        'blocks.anchor',
        'blocks.anchor-menu',
        'blocks.breadcrumbs',
        'blocks.button',
        'blocks.designers-list',
        'blocks.download-documents',
        'blocks.download-product-files',
        'blocks.download-products',
        'blocks.download-single',
        'blocks.form',
        'blocks.headline-text',
        'blocks.hero',
        'blocks.horizontal-tabs',
        'blocks.hotspot-image',
        'blocks.journal-list',
        'blocks.marquee-text',
        'blocks.masonry-gallery',
        'blocks.materials-list',
        'blocks.media-text',
        'blocks.project-info',
        'blocks.projects-list',
        'blocks.quote-media',
        'blocks.quote',
        'blocks.single-media-text',
        'blocks.single-media',
        'blocks.slider-team-cards',
        'blocks.spacer',
        'blocks.table',
        'blocks.text',
        'blocks.three-columns-cards',
        'blocks.title',
        'blocks.two-columns-cards',
        'blocks.two-media-masonry-text',
        'blocks.two-media-masonry',
        'blocks.two-media-text',
        'blocks.vertical-tabs'
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    rank: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::journal.journal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::journal.journal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::journal.journal',
      'oneToMany',
      'api::journal.journal'
    >;
    locale: Attribute.String;
  };
}

export interface ApiJournalsPageJournalsPage extends Schema.SingleType {
  collectionName: 'journals_pages';
  info: {
    singularName: 'journals-page';
    pluralName: 'journals-pages';
    displayName: 'Page - Journals';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    slug: Attribute.UID &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<'journals'>;
    transparentHeader: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    spinningIcon: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    blocks: Attribute.DynamicZone<
      [
        'blocks.anchor',
        'blocks.anchor-menu',
        'blocks.breadcrumbs',
        'blocks.button',
        'blocks.designers-list',
        'blocks.download-documents',
        'blocks.download-product-files',
        'blocks.download-products',
        'blocks.download-single',
        'blocks.form',
        'blocks.headline-text',
        'blocks.hero',
        'blocks.horizontal-tabs',
        'blocks.hotspot-image',
        'blocks.journal-list',
        'blocks.marquee-text',
        'blocks.masonry-gallery',
        'blocks.materials-list',
        'blocks.media-text',
        'blocks.project-info',
        'blocks.projects-list',
        'blocks.quote-media',
        'blocks.quote',
        'blocks.single-media-text',
        'blocks.single-media',
        'blocks.slider-team-cards',
        'blocks.spacer',
        'blocks.table',
        'blocks.text',
        'blocks.three-columns-cards',
        'blocks.title',
        'blocks.two-columns-cards',
        'blocks.two-media-masonry-text',
        'blocks.two-media-masonry',
        'blocks.two-media-text',
        'blocks.vertical-tabs'
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::journals-page.journals-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::journals-page.journals-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::journals-page.journals-page',
      'oneToMany',
      'api::journals-page.journals-page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiMaterialMaterial extends Schema.CollectionType {
  collectionName: 'materials';
  info: {
    singularName: 'material';
    pluralName: 'materials';
    displayName: 'Material';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    typology: Attribute.Relation<
      'api::material.material',
      'oneToOne',
      'api::material-typology.material-typology'
    >;
    coverImage: Attribute.Component<'elements.image'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    rank: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::material.material',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::material.material',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::material.material',
      'oneToMany',
      'api::material.material'
    >;
    locale: Attribute.String;
  };
}

export interface ApiMaterialCategoryMaterialCategory
  extends Schema.CollectionType {
  collectionName: 'material_categories';
  info: {
    singularName: 'material-category';
    pluralName: 'material-categories';
    displayName: 'Material category';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    rank: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::material-category.material-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::material-category.material-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::material-category.material-category',
      'oneToMany',
      'api::material-category.material-category'
    >;
    locale: Attribute.String;
  };
}

export interface ApiMaterialTypologyMaterialTypology
  extends Schema.CollectionType {
  collectionName: 'material_typologies';
  info: {
    singularName: 'material-typology';
    pluralName: 'material-typologies';
    displayName: 'Material typology';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description: Attribute.Blocks &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    notes: Attribute.Blocks &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    keywords: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    category: Attribute.Relation<
      'api::material-typology.material-typology',
      'oneToOne',
      'api::material-category.material-category'
    >;
    downloadFiles: Attribute.Component<'elements.download-file', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    rank: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::material-typology.material-typology',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::material-typology.material-typology',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::material-typology.material-typology',
      'oneToMany',
      'api::material-typology.material-typology'
    >;
    locale: Attribute.String;
  };
}

export interface ApiMaterialsPageMaterialsPage extends Schema.SingleType {
  collectionName: 'materials_pages';
  info: {
    singularName: 'materials-page';
    pluralName: 'materials-pages';
    displayName: 'Page - Materials';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    slug: Attribute.UID &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<'materiali'>;
    transparentHeader: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    spinningIcon: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    blocks: Attribute.DynamicZone<
      [
        'blocks.anchor',
        'blocks.anchor-menu',
        'blocks.breadcrumbs',
        'blocks.button',
        'blocks.designers-list',
        'blocks.download-documents',
        'blocks.download-product-files',
        'blocks.download-products',
        'blocks.download-single',
        'blocks.form',
        'blocks.headline-text',
        'blocks.hero',
        'blocks.horizontal-tabs',
        'blocks.hotspot-image',
        'blocks.journal-list',
        'blocks.marquee-text',
        'blocks.masonry-gallery',
        'blocks.materials-list',
        'blocks.media-text',
        'blocks.project-info',
        'blocks.projects-list',
        'blocks.quote-media',
        'blocks.quote',
        'blocks.single-media-text',
        'blocks.single-media',
        'blocks.slider-team-cards',
        'blocks.spacer',
        'blocks.table',
        'blocks.text',
        'blocks.three-columns-cards',
        'blocks.title',
        'blocks.two-columns-cards',
        'blocks.two-media-masonry-text',
        'blocks.two-media-masonry',
        'blocks.two-media-text',
        'blocks.vertical-tabs'
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::materials-page.materials-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::materials-page.materials-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::materials-page.materials-page',
      'oneToMany',
      'api::materials-page.materials-page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiPagePage extends Schema.CollectionType {
  collectionName: 'pages';
  info: {
    singularName: 'page';
    pluralName: 'pages';
    displayName: 'Page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.UID<'api::page.page', 'title'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    transparentHeader: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    spinningIcon: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    keywords: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    architect: Attribute.Blocks;
    photographer: Attribute.Blocks;
    products: Attribute.Blocks;
    coverImage: Attribute.Component<'elements.image'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    blocks: Attribute.DynamicZone<
      [
        'blocks.anchor',
        'blocks.anchor-menu',
        'blocks.breadcrumbs',
        'blocks.button',
        'blocks.designers-list',
        'blocks.download-documents',
        'blocks.download-product-files',
        'blocks.download-products',
        'blocks.download-single',
        'blocks.form',
        'blocks.headline-text',
        'blocks.hero',
        'blocks.horizontal-tabs',
        'blocks.hotspot-image',
        'blocks.journal-list',
        'blocks.marquee-text',
        'blocks.masonry-gallery',
        'blocks.materials-list',
        'blocks.media-text',
        'blocks.project-info',
        'blocks.projects-list',
        'blocks.quote-media',
        'blocks.quote',
        'blocks.single-media-text',
        'blocks.single-media',
        'blocks.slider-team-cards',
        'blocks.spacer',
        'blocks.table',
        'blocks.text',
        'blocks.three-columns-cards',
        'blocks.title',
        'blocks.two-columns-cards',
        'blocks.two-media-masonry-text',
        'blocks.two-media-masonry',
        'blocks.two-media-text',
        'blocks.vertical-tabs'
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    rank: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::page.page', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::page.page', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::page.page',
      'oneToMany',
      'api::page.page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiProductProduct extends Schema.CollectionType {
  collectionName: 'products';
  info: {
    singularName: 'product';
    pluralName: 'products';
    displayName: 'Product';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.UID<'api::product.product', 'title'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    transparentHeader: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    spinningIcon: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    category: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'api::product-category.product-category'
    >;
    typology: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'api::product-typology.product-typology'
    >;
    designer: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::designer.designer'
    >;
    designFusionSessionProduct: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<false>;
    coverImage: Attribute.Component<'elements.image'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    keywords: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    downloadFiles: Attribute.Component<'elements.download-file', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    blocks: Attribute.DynamicZone<
      [
        'blocks.anchor',
        'blocks.anchor-menu',
        'blocks.breadcrumbs',
        'blocks.button',
        'blocks.designers-list',
        'blocks.download-documents',
        'blocks.download-product-files',
        'blocks.download-products',
        'blocks.download-single',
        'blocks.form',
        'blocks.headline-text',
        'blocks.hero',
        'blocks.horizontal-tabs',
        'blocks.hotspot-image',
        'blocks.journal-list',
        'blocks.marquee-text',
        'blocks.masonry-gallery',
        'blocks.materials-list',
        'blocks.media-text',
        'blocks.project-info',
        'blocks.projects-list',
        'blocks.quote-media',
        'blocks.quote',
        'blocks.single-media-text',
        'blocks.single-media',
        'blocks.slider-team-cards',
        'blocks.spacer',
        'blocks.table',
        'blocks.text',
        'blocks.three-columns-cards',
        'blocks.title',
        'blocks.two-columns-cards',
        'blocks.two-media-masonry-text',
        'blocks.two-media-masonry',
        'blocks.two-media-text',
        'blocks.vertical-tabs'
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    rank: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::product.product',
      'oneToMany',
      'api::product.product'
    >;
    locale: Attribute.String;
  };
}

export interface ApiProductCategoryProductCategory
  extends Schema.CollectionType {
  collectionName: 'product_categories';
  info: {
    singularName: 'product-category';
    pluralName: 'product-categories';
    displayName: 'Product category';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    rank: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product-category.product-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product-category.product-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::product-category.product-category',
      'oneToMany',
      'api::product-category.product-category'
    >;
    locale: Attribute.String;
  };
}

export interface ApiProductTypologyProductTypology
  extends Schema.CollectionType {
  collectionName: 'product_typologies';
  info: {
    singularName: 'product-typology';
    pluralName: 'product-typologies';
    displayName: 'Product typology';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    rank: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product-typology.product-typology',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product-typology.product-typology',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::product-typology.product-typology',
      'oneToMany',
      'api::product-typology.product-typology'
    >;
    locale: Attribute.String;
  };
}

export interface ApiProductsPageProductsPage extends Schema.SingleType {
  collectionName: 'products_pages';
  info: {
    singularName: 'products-page';
    pluralName: 'products-pages';
    displayName: 'Page - Products';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    slug: Attribute.UID &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<'prodotti'>;
    transparentHeader: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    spinningIcon: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    blocks: Attribute.DynamicZone<
      [
        'blocks.anchor',
        'blocks.anchor-menu',
        'blocks.breadcrumbs',
        'blocks.button',
        'blocks.designers-list',
        'blocks.download-documents',
        'blocks.download-product-files',
        'blocks.download-products',
        'blocks.download-single',
        'blocks.form',
        'blocks.headline-text',
        'blocks.hero',
        'blocks.horizontal-tabs',
        'blocks.hotspot-image',
        'blocks.journal-list',
        'blocks.marquee-text',
        'blocks.masonry-gallery',
        'blocks.materials-list',
        'blocks.media-text',
        'blocks.project-info',
        'blocks.projects-list',
        'blocks.quote-media',
        'blocks.quote',
        'blocks.single-media-text',
        'blocks.single-media',
        'blocks.slider-team-cards',
        'blocks.spacer',
        'blocks.table',
        'blocks.text',
        'blocks.three-columns-cards',
        'blocks.title',
        'blocks.two-columns-cards',
        'blocks.two-media-masonry-text',
        'blocks.two-media-masonry',
        'blocks.two-media-text',
        'blocks.vertical-tabs'
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::products-page.products-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::products-page.products-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::products-page.products-page',
      'oneToMany',
      'api::products-page.products-page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiProjectProject extends Schema.CollectionType {
  collectionName: 'projects';
  info: {
    singularName: 'project';
    pluralName: 'projects';
    displayName: 'Project';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.UID<'api::project.project', 'title'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    transparentHeader: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    spinningIcon: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    keywords: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    category: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'api::project-category.project-category'
    >;
    architect: Attribute.Blocks;
    photographer: Attribute.Blocks;
    products: Attribute.Blocks;
    coverImage: Attribute.Component<'elements.image'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    blocks: Attribute.DynamicZone<
      [
        'blocks.anchor',
        'blocks.anchor-menu',
        'blocks.breadcrumbs',
        'blocks.button',
        'blocks.designers-list',
        'blocks.download-documents',
        'blocks.download-product-files',
        'blocks.download-products',
        'blocks.download-single',
        'blocks.form',
        'blocks.headline-text',
        'blocks.hero',
        'blocks.horizontal-tabs',
        'blocks.hotspot-image',
        'blocks.journal-list',
        'blocks.marquee-text',
        'blocks.masonry-gallery',
        'blocks.materials-list',
        'blocks.media-text',
        'blocks.project-info',
        'blocks.projects-list',
        'blocks.quote-media',
        'blocks.quote',
        'blocks.single-media-text',
        'blocks.single-media',
        'blocks.slider-team-cards',
        'blocks.spacer',
        'blocks.table',
        'blocks.text',
        'blocks.three-columns-cards',
        'blocks.title',
        'blocks.two-columns-cards',
        'blocks.two-media-masonry-text',
        'blocks.two-media-masonry',
        'blocks.two-media-text',
        'blocks.vertical-tabs'
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    rank: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::project.project',
      'oneToMany',
      'api::project.project'
    >;
    locale: Attribute.String;
  };
}

export interface ApiProjectCategoryProjectCategory
  extends Schema.CollectionType {
  collectionName: 'project_categories';
  info: {
    singularName: 'project-category';
    pluralName: 'project-categories';
    displayName: 'Project category';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    rank: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::project-category.project-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::project-category.project-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::project-category.project-category',
      'oneToMany',
      'api::project-category.project-category'
    >;
    locale: Attribute.String;
  };
}

export interface ApiProjectsPageProjectsPage extends Schema.SingleType {
  collectionName: 'projects_pages';
  info: {
    singularName: 'projects-page';
    pluralName: 'projects-pages';
    displayName: 'Page - Projects';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    slug: Attribute.UID &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<'progetti'>;
    transparentHeader: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    spinningIcon: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    blocks: Attribute.DynamicZone<
      [
        'blocks.anchor',
        'blocks.anchor-menu',
        'blocks.breadcrumbs',
        'blocks.button',
        'blocks.designers-list',
        'blocks.download-documents',
        'blocks.download-product-files',
        'blocks.download-products',
        'blocks.download-single',
        'blocks.form',
        'blocks.headline-text',
        'blocks.hero',
        'blocks.horizontal-tabs',
        'blocks.hotspot-image',
        'blocks.journal-list',
        'blocks.marquee-text',
        'blocks.masonry-gallery',
        'blocks.materials-list',
        'blocks.media-text',
        'blocks.project-info',
        'blocks.projects-list',
        'blocks.quote-media',
        'blocks.quote',
        'blocks.single-media-text',
        'blocks.single-media',
        'blocks.slider-team-cards',
        'blocks.spacer',
        'blocks.table',
        'blocks.text',
        'blocks.three-columns-cards',
        'blocks.title',
        'blocks.two-columns-cards',
        'blocks.two-media-masonry-text',
        'blocks.two-media-masonry',
        'blocks.two-media-text',
        'blocks.vertical-tabs'
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::projects-page.projects-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::projects-page.projects-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::projects-page.projects-page',
      'oneToMany',
      'api::projects-page.projects-page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiVenueVenue extends Schema.CollectionType {
  collectionName: 'venues';
  info: {
    singularName: 'venue';
    pluralName: 'venues';
    displayName: 'Venue';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.UID<'api::venue.venue', 'title'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    transparentHeader: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    spinningIcon: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    keywords: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    architect: Attribute.Blocks;
    photographer: Attribute.Blocks;
    products: Attribute.Blocks;
    coverImage: Attribute.Component<'elements.image'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    blocks: Attribute.DynamicZone<
      [
        'blocks.anchor',
        'blocks.anchor-menu',
        'blocks.breadcrumbs',
        'blocks.button',
        'blocks.designers-list',
        'blocks.download-documents',
        'blocks.download-product-files',
        'blocks.download-products',
        'blocks.download-single',
        'blocks.form',
        'blocks.headline-text',
        'blocks.hero',
        'blocks.horizontal-tabs',
        'blocks.hotspot-image',
        'blocks.journal-list',
        'blocks.marquee-text',
        'blocks.masonry-gallery',
        'blocks.materials-list',
        'blocks.media-text',
        'blocks.project-info',
        'blocks.projects-list',
        'blocks.quote-media',
        'blocks.quote',
        'blocks.single-media-text',
        'blocks.single-media',
        'blocks.slider-team-cards',
        'blocks.spacer',
        'blocks.table',
        'blocks.text',
        'blocks.three-columns-cards',
        'blocks.title',
        'blocks.two-columns-cards',
        'blocks.two-media-masonry-text',
        'blocks.two-media-masonry',
        'blocks.two-media-text',
        'blocks.vertical-tabs'
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    rank: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::venue.venue',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::venue.venue',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::venue.venue',
      'oneToMany',
      'api::venue.venue'
    >;
    locale: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::agenda.agenda': ApiAgendaAgenda;
      'api::contacts-page.contacts-page': ApiContactsPageContactsPage;
      'api::design-fusion-session-page.design-fusion-session-page': ApiDesignFusionSessionPageDesignFusionSessionPage;
      'api::designer.designer': ApiDesignerDesigner;
      'api::designers-page.designers-page': ApiDesignersPageDesignersPage;
      'api::document.document': ApiDocumentDocument;
      'api::downloads-page.downloads-page': ApiDownloadsPageDownloadsPage;
      'api::footer.footer': ApiFooterFooter;
      'api::header.header': ApiHeaderHeader;
      'api::homepage.homepage': ApiHomepageHomepage;
      'api::journal.journal': ApiJournalJournal;
      'api::journals-page.journals-page': ApiJournalsPageJournalsPage;
      'api::material.material': ApiMaterialMaterial;
      'api::material-category.material-category': ApiMaterialCategoryMaterialCategory;
      'api::material-typology.material-typology': ApiMaterialTypologyMaterialTypology;
      'api::materials-page.materials-page': ApiMaterialsPageMaterialsPage;
      'api::page.page': ApiPagePage;
      'api::product.product': ApiProductProduct;
      'api::product-category.product-category': ApiProductCategoryProductCategory;
      'api::product-typology.product-typology': ApiProductTypologyProductTypology;
      'api::products-page.products-page': ApiProductsPageProductsPage;
      'api::project.project': ApiProjectProject;
      'api::project-category.project-category': ApiProjectCategoryProjectCategory;
      'api::projects-page.projects-page': ApiProjectsPageProjectsPage;
      'api::venue.venue': ApiVenueVenue;
    }
  }
}
