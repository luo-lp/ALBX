// 这个文件处理所有文章数据的操作
// 引入连接对象
const conn = require('../utils/myconn.js')

// 获取所有文章数据
// obj是分页查询参数对象
// 里面必须包含这两个成员
// obj.pageNum:当前页码
// obj.pageSize:每页显示的记录数
exports.getAllPost = (obj,callback) => {
    // 1.创建sql语句--多表连接
    var sql = `select posts.*,users.nickname,categories.name
                from posts
                join users on posts.user_id = users.id
                join categories on posts.category_id = categories.id
                order by id desc
                limit ${(obj.pageNum-1)*obj.pageSize},${obj.pageSize}`
    // 2.调用方法获取数据
    conn.query(sql,(err,results) => {
        if(err){
            callback(err)
        }else{
            callback(null,results)
        }
    })
}