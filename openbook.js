var OpenBookJS = {};

OpenBookJS.init = require("./src/db/initDb.js");

OpenBookJS.newBookshelf = require("./src/db/createBookshelf.js");

OpenBookJS.addBook = require("./src/db/addBook.js");

OpenBookJS.setBookshelf = require("./src/db/setBookshelf.js");

module.exports = OpenBookJS;