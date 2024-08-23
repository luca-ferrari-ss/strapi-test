const _ = require("lodash");

module.exports = (plugin) => {
  const getController = (name) => {
    return strapi.plugins["users-permissions"].controller(name);
  };

  return plugin;
};
