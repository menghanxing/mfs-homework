function register() {
    var uname = $(".username").val();
    var upwd1 = $(".password1").val();
    var upwd2 = $(".password2").val();
    if (upwd1 !== upwd2) {
        alert("两次密码不一致");
    } else if (upwd1 === upwd2) {
        var data = {
            "username": uname,
            "password": upwd1
        }
        $.ajax({
            url: "http://www.a.com:3000/register",
            type: "post",
            data: data,
            success: function(data) {
                console.log(data);
            },
            error: function(err) {
                console.error(err);
            }
        });
    }
}