const mysql = require("mysql");

module.exports = function(bookshelfName, callback) {

    this.connection.query("CREATE TABLE IF NOT EXISTS ?? (id INTEGER(10) AUTO_INCREMENT NOT NULL, title VARCHAR(100) NOT NULL, author VARCHAR(100) NOT NULL, pubYear INTEGER(4), publisher VARCHAR(100), pages INTEGER(6), summary VARCHAR(5000), keyword1 VARCHAR(100), keyword2 VARCHAR(100), keyword3 VARCHAR(100), keyword4 VARCHAR(100), keyword5 VARCHAR(100), keyword6 VARCHAR(100), keyword7 VARCHAR(100), keyword8 VARCHAR(100), keyword9 VARCHAR(100), keyword10 VARCHAR(100), PRIMARY KEY (id))", [bookshelfName], callback);

}