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
User.find = function() {
    return new Promise(function(resolve, reject){
        db.findAll(table_name, (err, res) => {
            if(err){
                reject(err);
            } else {
                resolve(res[0]);
            }
        });
    });
}

/**
 * Return all users
 * @param {Callback} callback
 * @return {Array:User}
 */
User.findAll = function() {
    return new Promise(function(resolve, reject){
        db.findAll(table_name, (err, res) => {
            if(err){
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

module.exports = User;