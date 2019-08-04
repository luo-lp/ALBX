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
    .get('/admin/index',pagesController.getgetAdminIndexList)
    .get('/admin/categories',pagesController.getAdminCategories)
    // 登录页
    .get('/admin/login',pagesController.getAdminLogin)
    .get('/admin/comments',pagesController.getAdminComments)
    .get('/admin/navMenus',pagesController.getAdminNavMenus)
    .get('/admin/passwordReset',pagesController.getAdminPasswordReset)
    .get('/admin/postAdd',pagesController.getAdminPostAdd)
    .get('/admin/posts',pagesController.getAdminPosts)
    .get('/admin/profile',pagesController.getAdminProfile)
    .get('/admin/settings',pagesController.getAdminSettings)
    .get('/admin/slides',pagesController.getAdminSlides)
    .get('/admin/users',pagesController.getAdminUsers)
    //  用户数据请求
    .post('/login',userController.userController)
module.exports = router;