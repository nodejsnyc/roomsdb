/*
 * Copyright 2013 Elad Elrom, All Rights Reserved.
 * Code licensed under the BSD License:
 * @author Elad Elrom <elad.ny...gmail.com>
 */

var connection;

function connectdb(host, user, password) {
    var mysql      = require('mysql');
    connection = mysql.createConnection({
        host     : host,
        user     : user,
        password : password,
    });

    connection.connect();
}

function runSQLCommand(sql, sqlCallback) {
    connection.query(sql, function (err, rows, fields) {
      if (err) throw err;
      sqlCallback(rows);
    });
}

module.exports.connectdb = connectdb;
module.exports.runSQLCommand = runSQLCommand;