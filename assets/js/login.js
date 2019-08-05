$(function () {
    $('.btn-primary').on('click', function () {
        if($('#email').val().trim().length===0){
            alert('请输入用户名')
            return
        }
        if($('#password').val().trim().length===0){
            alert('请输入密码')
            return
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
                    // alert(res.msg);
                    location.href = '/admin/index.html'
                } else {
                    alert(res.msg);
                }
            }
        })
    })
})