// 这个文件处理所有文章数据的操作
// 引入连接对象
const conn = require('../utils/myconn.js')

exports.getAllPost = (obj, callback) => {

    var sql = `select posts.*,users.nickname,categories.name
    from posts
    join users on posts.user_id = users.id
    join categories on posts.category_id = categories.id
    where 1=1
    `
    if (obj.cate && obj.cate != 'all') {
        sql += `and category_id = ${obj.cate}`
    }
    if (obj.status && obj.status != 'all') {
        sql += ` and posts.status ='${obj.status}'`
    }
    sql += `order by id desc
    limit ${(obj.pageNum - 1) * obj.pageSize},${obj.pageSize}`

    conn.query(sql, (err, results) => {
        if (err) {
            callback(err)
        } else {
            sql = `select count(*) as cnt
                    from posts
                    join users on posts.user_id = users.id
                    join categories on posts.category_id = categories.id`
            conn.query(sql, (err2, res2) => {
                if (err2) {
                    callback(err2)
                } else {
                    callback(null, {
                        data: results,
                        total: res2[0].cnt
                    })
                }
            })
        }
    })
}