const Study = require('../models/study.model');

exports.findAll = async (req, res) => {
    var toto = await Study.test();
    res.status(200).json(toto);
}

exports.find = (req, res) => {
    try{
        Study.find(req.body, (err, result) => {
            res.status(200).json(result);
        })
    } catch (e) {
        throw e;
    }
}

exports.findOne = (req, res) => {
    try{
        Study.findOne(req.body, (err, result) => {
            res.status(200).json(result);
        })
    } catch (e) {
        throw e;
    }
}

exports.create = (req, res) => {
    try{
        Study.create(req.body, (err, result) => {
            res.status(200).json(result);
        });
    } catch(e) {
        throw e;
    }
}

exports.update = (req, res) => {
    try{
        Study.update(req.body, (err, result) => {
            res.status(200).json(result);
        })
    } catch (e) {
        throw e;
    }
}