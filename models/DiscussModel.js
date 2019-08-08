//下载npm i mysql -S
const mysql = require('mysql')
//链接数据库
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'baixiu',
    dateStrings:true
})
exports.getDiscuss = function (obj,callback) {
    var sql = `select posts.*,users.nickname,categories.name
                from posts
                join users on posts.user_id = users.id
                join categories on posts.category_id = categories.id
                where 1=1  ` // 添加恒成立，这样有一个好处：后面进行语句拼接的时候，不用再考虑是拼接 where 还是拼接 and,我们可以统一 拼接and
    if( obj.cate && obj.cate != 'all'){ // 有没有传递分类数据
        sql += ` and category_id = ${obj.cate}`
    }
    if(obj.status && obj.status != 'all'){
        sql += ` and posts.status ='${obj.status}'`
    }

    sql += ` order by id desc
                limit ${(obj.pageNum - 1) * obj.pageSize},${obj.pageSize}`

    // 2.调用方法获取数据
    conn.query(sql, (err, results) => {
        if (err) {
            callback(err)
        } else {
            // 再创建sql语句 进行总记录的查询
            sql = `select count(*) as cnt
                    from posts
                    join users on posts.user_id = users.id
                    join categories on posts.category_id = categories.id`
            conn.query(sql, (err2, res2) => {
                if (err2) {
                    callback(err2)
                } else {
                    // 没有错误，不仅仅要返回之前的查询数据，而且还要返回当前查询的总记录数
                    callback(null, { data: results, total: res2[0].cnt })
                }
            })
        }
    })
}