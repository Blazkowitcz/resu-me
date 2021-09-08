const Study = require('../models/study.model');
const User = require('../models/user.model');
const Utils = require('../utils/utils');

exports.index = async (req, res) => {
    let user = await User.find();
    user.age = Utils.dateToAge(user.birthday);
    res.render('pages/index', {user: user});
}