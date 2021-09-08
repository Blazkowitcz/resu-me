const db = require('../modules/database.module');
const table_name = 'experiences';

class Experience {
    constructor(data){
        for (var key in data) {
            this[key] = data[key];
        }
    }
}

/**
 * Return all experiences
 * @param {Function} callback 
 */
Experience.findAll = (callback) => {
    db.findAll(table_name, (err, res) => {
        if(err){
            callback(err, null);
        } else {
            callback(null, res);
        }
    })
}

/**
 * Return experiences related to search
 * @param {JSON} data 
 * @param {Function} callback 
 */
Experience.find = (data, callback) => {
    db.find(table_name, data, (err, res) => {
        if(err){
            callback(err, null);
        } else {
            callback(null, res);
        }
    })
}

/**
 * Return a single experience related to search
 * @param {JSON} data 
 * @param {Function} callback 
 */
Experience.findOne = (data, callback) => {
    db.find(table_name, data, (err, res) => {
        if(res.length > 0){
            callback(null, new Study(res[0]));
        }else {
            callback(null, {});
        }
    });
}

/**
 * Create an experience
 * @param {JSON} data 
 * @param {Function} callback 
 */
Experience.create = (data, callback) => {
    db.create(table_name, data, (err, res) => {
        if(err){
            callback(err, null);
        } else {
            callback(null, res);
        }
    });
}

/**
 * Update an experience
 * @param {JSON} data 
 * @param {Function} callback 
 */
Experience.update = (data, callback) => {
    db.update(table_name, data, (err, res) => {
        if(err){
            callback(err, null);
        } else {
            callback(null, res);
        }
    });
}

module.exports = Experience;