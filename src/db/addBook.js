const mysql = require("mysql");

module.exports = function({ bookshelfName = "bookshelfTest", title, author, publicationYear, publisher, pages, summary, keyword1, keyword2, keyword3, keyword4, keyword5, keyword6, keyword7, keyword8, keyword9, keyword10 }, callback) {

    this.connection.query("INSERT INTO ?? (title, author, pubYear, publisher, pages, summary, keyword1, keyword2, keyword3, keyword4, keyword5, keyword6, keyword7, keyword8, keyword9, keyword10) VALUES (?, ?, 1, ?, 2, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [bookshelfName, title, author, publicationYear, publisher, pages, summary, keyword1, keyword2, keyword3, keyword4, keyword5, keyword6, keyword7, keyword8, keyword9, keyword10], function(error) {
        if (callback) { 
            callback(error);
        }
    });

}