const db = require('../modules/database.module');
const table_name = 'studies';

class Study {
    constructor(data){
        for (var key in data) {
            this[key] = data[key];
        }
    }
}

Study.test = function(){
    return new Promise(function(resolve, reject){
        db.test(table_name, (err, res) => {
            resolve(res);
        })
    });
}

/**
 * Return all studies
 * @param {Function} callback 
 */
Study.findAll = function() {
    return new Promise(function(resolve, reject){
        db.findAll(table_name, (err, res) => {
            if(err){
                reject(err);
            } else {
                resolve(res);
            }
        });
    })
}

/**
 * Return studies related to search
 * @param {JSON} data 
 * @param {Function} callback 
 */
Study.find = function(data) {
    return new Promise(function(resolve, reject){
        db.find(table_name, data, (err, res) => {
            if(err){
                reject(err);
            } else {
                resolve(res);
            }
        });
    })
}

/**
 * Return a single study related to search
 * @param {JSON} data 
 * @param {Function} callback 
 */
Study.findOne = (data, callback) => {
    db.find(table_name, data, (err, res) => {
        if(res.length > 0){
            callback(null, new Study(res[0]));
        }else {
            callback(null, {});
        }
    });
}

/**
 * Create a study
 * @param {JSON} data 
 * @param {Function} callback 
 */
Study.create = (data, callback) => {
    db.create(table_name, data, (err, res) => {
        if(err){
            callback(err, null);
        } else {
            callback(null, res);
        }
    });
}

/**
 * Update a study
 * @param {JSON} data 
 * @param {Function} callback 
 */
Study.update = (data, callback) => {
    db.update(table_name, data, (err, res) => {
        if(err){
            callback(err, null);
        } else {
            callback(null, res);
        }
    });
}

module.exports = Study;