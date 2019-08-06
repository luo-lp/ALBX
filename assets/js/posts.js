$(function(){
    $.ajax({
        url:'/getAllPost',
        type:'get',
        // 分页查询需要参数
        data:{
            pageNum:1,
            pageSize:3
        },
        success:function(result){
            console.log(result)
            var html = template('postListTemp',result)
            $('tbody').html(html)
        }
    })
})