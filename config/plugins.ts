export default ({ env }) => ({
  /**
   * AWS S3
   * https://market.strapi.io/providers/@strapi-provider-upload-aws-s3
   */
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        baseUrl: env("CDN_URL"),
        rootPath: env("CDN_ROOT_PATH"),
        s3Options: {
          credentials: {
            accessKeyId: env("AWS_ACCESS_KEY_ID"),
            secretAccessKey: env("AWS_ACCESS_SECRET"),
          },
          region: env("AWS_REGION"),
          params: {
            ACL: env("AWS_ACL", "public-read"),
            signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60),
            Bucket: env("AWS_BUCKET"),
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },

  /**
   * Documentation
   * https://docs.strapi.io/dev-docs/plugins/documentation
   */
  documentation: {
    enabled: true,
    config: {
      openapi: '3.0.0',
      info: {
        version: '1.0.0',
        title: 'API Documentation',
        description: '',
        termsOfService: '',
        contact: {
          name: 'Sombrero Studio',
          email: 'master@sombrerostudio.com',
          url: 'https://sombrerostudio.com'
        },
        license: {
          name: 'Apache 2.0',
          url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
        },
      },
      'x-strapi-config': {
        // Leave empty to ignore plugins during generation
        plugins: [ 'upload', 'users-permissions'],
        path: '/documentation',
      },
      servers: [{ url: 'http://localhost:1337/api', description: 'Development server' }],
      externalDocs: {
        description: 'Find out more',
        url: 'https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html'
      },
      security: [ { bearerAuth: [] } ]
    }
  },

  /**
   * Drag drop content types
   * https://market.strapi.io/plugins/@retikolo-drag-drop-content-types
   */
  'drag-drop-content-types': {
    enabled: true
  },

  /**
   * Nodemailer
   * https://market.strapi.io/providers/@strapi-provider-email-nodemailer
   */
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.example.com"),
        port: env("SMTP_PORT", 587),
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: env("SMTP_EMAIL", "hello@example.com"),
        defaultReplyTo: env("SMTP_EMAIL", "hello@example.com"),
      },
    },
  },

  /**
   * Schemas to TS
   * https://market.strapi.io/plugins/strapi-plugin-schemas-to-ts
   */
  'schemas-to-ts': {
    enabled: true,
    config: {
      acceptedNodeEnvs: ["development"],
      commonInterfacesFolderName: 'src/generated-interfaces',
      alwaysAddEnumSuffix: false,
      alwaysAddComponentSuffix: false,
      usePrettierIfAvailable: true,
      logLevel: 2,
      destinationFolder: 'src/generated-interfaces',
    }
  },
});
