// 这个控制器完成所有与用户相关的增加删除修改和查询
//下载npm i mysql -S
const mysql = require('mysql')
//链接数据库
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'baixiu',
})

function isMysql(sql, data, callback) {

}

exports.userModel = (USN, callback) => {
    // 创建sql语句 
    // 调用Mysql模块
    // 返回操作结果
    //创建sql语句
    // const sql = `SELECT * FROM users WHERE email="admin@zce.me"`
    const sql = `SELECT * FROM users WHERE email="${USN}"`
    //执行sql语句
    conn.query(sql, (err, result) => {
        if (err) console.log('获取数据失败' + err.message);
        callback(result,err)
    })
}