// 分发路由
const express = require('express')
var router = express.Router()
const pagesController = require('./controllers/pagesController')
const userController = require('./controllers/userController')
// 前端展示页
router.get('/', pagesController.getIndex)
    .get('/detail',pagesController.getDetail)
    .get('/list',pagesController.getList)
    // 后台管理页
    .get('/admin/index.html',pagesController.getgetAdminIndexList)
    .get('/admin/categories.html',pagesController.getAdminCategories)
    // 登录页
    .get('/admin/login',pagesController.getAdminLogin)
    .get('/admin/comments.html',pagesController.getAdminComments)
    .get('/admin/nav-menus.html',pagesController.getAdminNavMenus)
    .get('/admin/passwordReset',pagesController.getAdminPasswordReset)
    .get('/admin/post-add.html',pagesController.getAdminPostAdd)
    .get('/admin/posts.html',pagesController.getAdminPosts)
    .get('/admin/profile.html',pagesController.getAdminProfile)
    .get('/admin/settings.html',pagesController.getAdminSettings)
    .get('/admin/slides.html',pagesController.getAdminSlides)
    .get('/admin/users.html',pagesController.getAdminUsers)
    //  用户数据请求
    .post('/login',userController.userController)
module.exports = router;