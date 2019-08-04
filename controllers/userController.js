// 这个控制器完成所有与用户相关的业务操作
const userModel = require('../models/userModel')
exports.userController = (req, res) => {
    userModel.userModel(req.body.USN, (result) => {
        let PSW = req.body.PSW
        if (result[0]==undefined) {
            res.send({
                code: 504,
                msg: '账号不存在'
            })
            console.log(1);
        } else {
            if (PSW == result[0].PSW) {
                res.send({
                    code: 200,
                    msg: '登录成功'
                })
            } else {
                res.send({
                    code: 404,
                    msg: '密码错误'
                })
            }
        }
    })
}