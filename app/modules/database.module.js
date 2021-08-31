const mysql = require('mysql');
const config = require('../../config.json');
const db = mysql.createConnection({
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database_name
});

db.connect(function(err) {
    if(err) { throw err; }
});

exports.findAll = (table, result) => {
    db.query("SELECT * FROM " + table, (err, res) => {
        if(err){
            result(err, null);
        }else{
            result(null, res);
        }
        
    })
}

exports.find = (table, data, result) => {
    db.query("SELECT * FROM " + table + " WHERE ?", [data], (err, res) => {
        try{
            if(err){
                result(err, null);
            }else{
                result(null, res);
            }
        } catch (e) {

        }
    })
}