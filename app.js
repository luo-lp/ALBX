const express = require('express')
const router =require('./router')
// 下载 npm i body-parser -S
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(3000,()=>{
    console.log('http://127.0.0.1:3000/');
})
app.use('/assets',express.static('assets'))
app.use('/uploads',express.static('uploads'))
app.use(router)
app.set('view engine','ejs')
app.set('views',__dirname+'/views')

app.get('/',(req,res)=>{
    res.render('index')
})
