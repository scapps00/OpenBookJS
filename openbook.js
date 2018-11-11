var OpenBookJS = {};

OpenBookJS.init = require("./src/db/initDb.js");

OpenBookJS.newBookshelf = require("./src/db/createBookshelf.js");

module.exports = OpenBookJS;