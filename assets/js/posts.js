$(function () {
    var pageNum = 1
    var pageSize = 2

    function init(search) {
        $.ajax({
            type: 'get',
            url: '/getAllPost',
            data: {
                pageNum,
                pageSize,
                ...search
            },
            success: function (res) {
                if (res.code === 200) {
                    setPagenation(res.data.total / pageSize)
                    let html = template('postListTemp', res.data)
                    $('tbody').html(html)
                }
            }
        })
    }
    init()

    function setPagenation(total) {
        // 初始化
        $('.pagination').bootstrapPaginator({
            // 配置
            bootstrapMajorVersion: 3,
            currentPage: pageNum, // 当前页码
            totalPages: total, // 总页数
            onPageClicked: function (event, originalEvent, type, page) {
                // page就是你当前想获取数据的页码
                // 修改全局pageNum
                pageNum = page
                // 重新调用加载数据的方法
                init()
            }
        })
    }
    $.ajax({
        type: 'get',
        url: '/getAllCate',
        dataType: 'json',
        success: function (res) {
            console.log(res);
            var str = '<option value = "all">所有分类</option>';
            for (var i = 0; i < res.data.length; i++) {
                str += `<option value = "${res.data[i].id}">${res.data[i].name}</option>`
                $('.cateSelector').html(str)
            }
        }
    })
    $('.btn-search').on('click', function () {
        var obj = {
            status:$('.statuSelector').val(),
            cate:$('.cateSelector').val()
        }
        init(obj)
    })
})