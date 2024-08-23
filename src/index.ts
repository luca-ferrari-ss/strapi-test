import { Strapi } from "@strapi/strapi";
import { seedLocale } from "./utils/seed/locale";
import { seedAdmin } from "./utils/seed/admin";
import { seedUpload } from "./utils/seed/upload";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }: { strapi: Strapi }) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    /**
     * Run bootstrap function only if NODE_ENV is set to 'development'
     */
    if (process.env.NODE_ENV == "development") {
      console.log("***** Running bootstrap *****");
      console.log("Environment: development");
      // Creating admin user
      await seedAdmin();
      // Start seeding locale
      await seedLocale();
      // Uploading image
      await seedUpload();
    }
  },
};
