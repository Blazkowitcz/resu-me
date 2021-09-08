const Experience = require('../models/experience.model');

exports.findAll = (req, res) => {
    try{
        Experience.findAll((err, result) => {
            res.status(200).json(result);
        })
    } catch(e) {
        throw e;
    }
}

exports.find = (req, res) => {
    try{
        Experience.find(req.body, (err, result) => {
            res.status(200).json(result);
        })
    } catch (e) {
        throw e;
    }
}

exports.findOne = (req, res) => {
    try{
        Experience.findOne(req.body, (err, result) => {
            res.status(200).json(result);
        })
    } catch (e) {
        throw e;
    }
}

exports.create = (req, res) => {
    try{
        Experience.create(req.body, (err, result) => {
            res.status(200).json(result);
        });
    } catch(e) {
        throw e;
    }
}

exports.update = (req, res) => {
    try{
        Experience.update(req.body, (err, result) => {
            res.status(200).json(result);
        })
    } catch (e) {
        throw e;
    }
}