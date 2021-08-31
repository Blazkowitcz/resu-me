const db = require('../modules/database.module');
const table_name = 'users';

class User {
    constructor(data){
        for (var key in data) {
            this[key] = data[key];
        }
    }
}

User.prototype.save = function save() {
    db.create(table_name, this);
}

/**
 * Return users related to search elements
 * @param {JSON} data 
 * @param {Array:User} callback 
 */
User.find = (data, callback) => {
    db.find(table_name, data, (err, res) => {
        if(err){
            callback(err, null);
        }
        callback(null, res);
    });
}

/**
 * Return all users
 * @param {Callback} callback
 * @return {Array:User}
 */
User.findAll = (callback) => {
    db.findAll(table_name, (err, res) => {
        if(err){
            callback(err, null);
        }
        callback(null, res);
    })
}

module.exports = User;