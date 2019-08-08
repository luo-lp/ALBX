const getDiscussModel = require('../models/DiscussModel')

exports.getDiscuss = function (req, res) {
    let obj = req.query
    console.log(obj);
    getDiscussModel.getDiscuss(obj,(data)=>{
        res.send(data)
    })
}