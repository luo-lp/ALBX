const express = require('express')
const router = require('./router')
const session = require('express-session')
// 下载 npm i body-parser -S
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.urlencoded({
    extended: false
}));

// 启用 session 中间件
app.use(session({
    secret: 'keyboard cat', // 相当于是一个加密密钥，值可以是任意字符串
    resave: false, // 强制session保存到session store中
    saveUninitialized: false // 强制没有“初始化”的session保存到storage中
}))
app.listen(3000, () => {
    console.log('http://127.0.0.1:3000/');
})
app.use('/assets', express.static('assets'))
app.use('/uploads', express.static('uploads'))

//设置状态保持中间件
app.use(function (req, res, next) {
    if (req.session.isLogin && req.session.isLogin == 'true' || req.url == '/admin/login' || req.url.indexOf('/admin') == -1) {
        next()
    }else{
        res.redirect('/admin/login')
    }
})

app.use(router)
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/', (req, res) => {
    res.render('index')
})