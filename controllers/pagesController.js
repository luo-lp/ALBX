// 客户展示页
exports.getIndex=(req,res)=>{
    res.render('index')
}
exports.getDetail=(req,res)=>{
    res.render('detail')
}
exports.getList=(req,res)=>{
    res.render('list')
}
// 后台管理页
exports.getgetAdminIndexList=(req,res)=>{
    res.render('admin/index')
}

exports.getAdminCategories=(req,res)=>{
    res.render('admin/categories')
}
exports.getAdminLogin=(req,res)=>{
    res.render('admin/login')
}
exports.getAdminComments=(req,res)=>{
    res.render('admin/comments')
}

//-----------------
exports.getAdminNavMenus=(req,res)=>{
    res.render('admin/nav-menus')
}

exports.getAdminPasswordReset=(req,res)=>{
    res.render('admin/password-reset')
}

exports.getAdminPostAdd=(req,res)=>{
    res.render('admin/post-add')
}

exports.getAdminPosts=(req,res)=>{
    res.render('admin/posts')
}

exports.getAdminProfile=(req,res)=>{
    res.render('admin/profile')
}

exports.getAdminSettings=(req,res)=>{
    res.render('admin/settings')
}

exports.getAdminSlides=(req,res)=>{
    res.render('admin/slides')
}

exports.getAdminUsers=(req,res)=>{
    res.render('admin/users')
}