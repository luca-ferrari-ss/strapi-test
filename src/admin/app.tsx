import IT from "./translations/it.json"
import favicon from "./extensions/favicon.png"
import logo from "./extensions/logo.png"

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: logo,
    },
    // Replace the favicon
    head: {
      favicon: favicon,
    },
    // Add a new locale, other than 'en'
    locales: ["it"],
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: favicon,
    },
    // Override or extend the theme
    theme: {
      // overwrite light theme properties
      light: {
        colors: {
          primary100: "#e7e7e7",
          primary200: "#d1d1d1",
          primary500: "#6d6d6d",
          primary600: "#5d5d5d",
          primary700: "#4f4f4f",
          buttonPrimary100: "#e7e7e7",
          buttonPrimary200: "#d1d1d1",
          buttonPrimary500: "#6d6d6d",
          buttonPrimary600: "#5d5d5d",
          buttonPrimary700: "#4f4f4f",
        },
      },

      // overwrite dark theme properties
      dark: {
        // ...
      },
    },
    // Extend the translations
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Palm Beach Cannes",
        "app.components.LeftMenu.navbrand.workplace": "Dashboard",
        "Auth.form.welcome.title": "Welcome!",
        "Auth.form.welcome.subtitle": "Log in to Palm Beach Cannes dashboard",
      },
      it: IT
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { releases: false },
  },

  bootstrap() {},
};
