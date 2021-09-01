const Study = require('../models/study.model');

exports.findAll = (req, res) => {
    try{
        Study.findAll((err, result) => {
            res.status(200).json(result);
        })
    } catch(e) {

    }
}

exports.create = (req, res) => {
    try{
        Study.create(req.body, (err, result) => {
            res.status(200).json(result);
        });
    } catch(e) {

    }
}