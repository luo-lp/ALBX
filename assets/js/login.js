$(function () {
    $('.btn-primary').on('click', function () {
        var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        if (!reg.test($('#email'))) {
            alert("邮箱格式不对");
            return false;
        }
        let USN = $('#email').val().trim()
        let PSW = $('#password').val().trim()
        $.ajax({
            type: 'POST',
            url: '/login',
            data: {
                USN,
                PSW
            },
            success: function (res) {
                if (res.code === 200) {
                    alert(res.msg);
                    location.href = '/admin/index'
                } else {
                    alert(res.msg);
                }
            }
        })
    })
})