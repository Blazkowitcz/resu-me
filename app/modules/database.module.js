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

/**
 * Create data in database related to table name and datas
 * @param {String} table 
 * @param {Array} data 
 * @param {Function} result 
 */
exports.create = (table ,data, result) => {
    db.query("INSERT INTO " + table + " SET ?", [data], (err, res) => {
        if(err){
            result(err, null);
        }else{
            result(null, res);
        }
    });
}

exports.test = (table, result) => {
    db.query("SELECT * FROM " + table, (err, res) => {
        result(null, res);
    });
}

/**
 * Find all data in database related to table name
 * @param {String} table 
 * @param {Function} result 
 */
exports.findAll = (table, result) => {
    db.query("SELECT * FROM " + table, (err, res) => {
        if(err){
            result(err, null);
        }else{
            result(null, res);
        }
    });
}

/**
 * Find data in database related to table name and search
 * @param {String} table 
 * @param {JSON} data 
 * @param {Function} result 
 */
exports.find = (table, data, result) => {
    db.query("SELECT * FROM " + table + " WHERE ?", [data], (err, res) => {
        try{
            if(err){
                result(err, null);
            }else{
                result(null, res);
            }
        } catch (e) {
            throw e;
        }
    });
}

/**
 * Update data in database related to table name
 * @param {String} table 
 * @param {JSON} data 
 * @param {Function} result 
 */
exports.update = (table ,data, result) => {
    let id = data.id;
    db.query("UPDATE " + table + " SET ? WHERE id = " + id, [data], (err, res) => {
        try{
            if(err){
                result(err, null);
            } else {
                result(null, res);
            }
        } catch (e) {
            throw e;
        }
    });
}