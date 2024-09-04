export default ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT', 'someRandomLongString'),
  },
  auditLogs: { // only accessible with an Enterprise plan
    enabled: env.bool('AUDIT_LOGS_ENABLED', false),
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'someSecretKey'),
  },
  transfer: { 
    token: { 
      salt: env('TRANSFER_TOKEN_SALT', 'anotherRandomLongString'),
    } 
  },
  flags: {
    nps: env.bool('FLAG_NPS', false),
    promoteEE: env.bool('FLAG_PROMOTE_EE', false),
  },
  url: "/dashboard",
});