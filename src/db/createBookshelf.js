const mysql = require("mysql");

module.exports = function(bookshelfName) {

    this.connection.query("CREATE TABLE IF NOT EXISTS ?? (id INTEGER(10) AUTO_INCREMENT NOT NULL, title VARCHAR(100) NOT NULL, author VARCHAR(100) NOT NULL, pubYear INTEGER(4), publisher VARCHAR(100), pages INTEGER(6), summary VARCHAR(5000), keyword VARCHAR(100), PRIMARY KEY (id))", [bookshelfName])

}