const db = require('../modules/database.module');
const table_name = 'studies';

class Study {
    constructor(data){
        for (var key in data) {
            this[key] = data[key];
        }
    }
}

/**
 * 
 * @param {Function} callback 
 */
Study.findAll = (callback) => {
    db.findAll(table_name, (err, res) => {
        callback(null, res);
    });
}

Study.create = (data, callback) => {
    db.create(table_name, data, (err, res) => {
        callback(null, res);
    });
}

module.exports = Study;