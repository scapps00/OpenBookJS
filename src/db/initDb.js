const mysql = require("mysql");

module.exports = function(host, user, password, database, callback) {
    
    var OpenBookJS = this;

    var selectDb = function(error, results, fields) {
        if (error) {
            console.log(error);
        } else {
            OpenBookJS.connection.query("USE ??", [database], function(error, results, fields) {
                if (error) {
                    console.log(error);
                } else {
                    callback();
                }
            });
        }
    };

    OpenBookJS.connection = mysql.createConnection({
        host     : host,
        user     : user,
        password : password
    });
       
    OpenBookJS.connection.connect();

    OpenBookJS.connection.query("CREATE DATABASE IF NOT EXISTS ??", [database], selectDb);


}