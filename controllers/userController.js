// 这个控制器完成所有与用户相关的业务操作
const userModel = require('../models/userModel')
exports.userController = (req, res) => {
    userModel.userModel(req.body.USN, (result,err) => {
        if(err){
            res.send({
                code: 404,
                msg: '服务器错误'
            })
            return
        }
        let PSW = req.body.PSW
        if (result[0] == undefined) {
            res.send({
                code: 504,
                msg: '账号不存在'
            })
        } else {
            if (PSW == result[0].password) {
                // 设置状态保持
                req.session.isLogin = 'true';
                req.session.currentUser=result
                res.json({
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