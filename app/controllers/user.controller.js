const User = require('../models/user.model');

exports.create = (req, res) => {
    const { name, birthday, email, phone, address, zipcode, city, country } = req.body;
    try{
        //user = new User({name, birthday, email, phone, address, zipcode, city, country});
        User.find({id: 1}, (err, result) => {
            res.status(200).json({ message: result });
        })
    } catch (e){
        console.log(e);
        res.status(500).json({ message: "Error during user creation" });
    }
}

exports.find = (req, res) => {
    try{
        User.find(req.body, (err, result) => {
            if(err){
                res.status(500).json({ message: err.sqlMessage });
            }
            res.status(200).json(result);
        })
    } catch (e) {
        res.status(500).json({ message: "Error during user search" });
    }
}

exports.findAll = (req, res) => {
    try{
        User.findAll((err, result) => {
            res.status(200).json(result);
        });
    } catch (e) {
    }
}