


define(['jquery','cookie'], function ($) {
    $('#formSubmit').submit(function () {
        var data = $(this).serializeArray();
        console.log(data);
        console.log(123);
        $.ajax({
            url: '/api/login',
            type: 'post',
            data: data,
            success: function (s) {
                if (s.code == 200) {
                    alert('登陆成功');
                    var infoStr = JSON.stringify(s.result); //将对象转换成字符串
                    console.log(infoStr);
                    $.cookie('tcInfo', infoStr); //将服务器返回来的数据(用户名和头像信息)存储在cookie，cookie可以在同一域名下面的页面之间互相传递
                    window.location.href = 'index';
                }
            },
            error: function (e) {
                alert('用户名密码错误');
            }
        })
        return false;
    })
});