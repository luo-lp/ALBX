$(function () {
    let url = location.href
    if(url.indexOf('?')!=-1){
        url = url.split('?')[0].split('/admin/')[1];    
    }else{
        url = url.split('/admin/')[1];
    }
    if(url == 'posts.html'||url=='post-add.html'||url=='categories.html'){
        $('#menu-posts').addClass('in').attr('aria-expanded',true)
    }else if(url=='nav-menus.html'||url=='slides.html'||url=='settings.html'){
        $('#menu-settings').addClass('in').attr('aria-expanded',true)
    }
})