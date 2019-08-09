/*文件上传
​    注册change事件
​    以FormData方式保存数据
​    formdata.append('img',myfile)
​    formdata.append('username',"名字叫：jackandrose")
​    发送ajax请求
​        contentType设置为false
​        processData设置为false
​        json格式解析返回参数
​        成功后就显示预览
​        把图片信息添加到隐藏域
加载分类数据
​    get /getAllCate
​    json格式解析返回参数
    添加到分类栏中
创建ckeditor富文本框控件替换页面中的textarea
    它会创建一个富文本框对象
    CKEDITOR.replace('content')
发请求 json格式解析返回参数 成功跳转页面*/
$(function () {
    $('#feature').on('change', function () {
        var myfile = document.querySelector('#feature').files[0]
        var formdata = new FormData()
        formdata.append('img', myfile)
        formdata.append('username', '名字叫:jack')
        $.ajax({
            url: '/uploadFile',
            type: 'post',
            dataType: 'json',
            data: formdata,
            contentType: false,
            processData: false,
            success: function (res) {
                $('.thumbnail').attr('src', './../uploads/' + res.img).show()
                $('input[name="feature"]').val(res.img)
            }
        })
    })
    $.ajax({
        url: '/getAllCate',
        type: 'get',
        dataType: 'json',
        success: function (res) {
            if (res.code == 200) {
                let str = `<option value="all">所有分类</option>`
                for(let i =0;i<res.data.length;i++){
                    str+=`<option value="${res.data[i].id}">${res.data[i].name}</option>`
                }
                $('#category').html(str)
            }
        }
    })
    CKEDITOR.replace('content')
    $('.btnsave').on('click',function(){
        CKEDITOR.instances.content.updateElement()
        $.ajax({
            url:'/addPost',
            type:'post',
            data:$('form').serialize(),
            dataType:'json',
            success:function(res){
                if(res==200){
                    location.href = '/admin/posts'
                }else{
                    alert(res.msg)
                }
            }
        })
    }) 
})