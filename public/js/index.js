$(document).ready(function(){
    var $loginBox = $('#loginBox');
    var $registerBox = $('#registerBox');
    $loginBox.find('a.colMint').click(function() {
        $registerBox.show();
        $loginBox.hide();
    });

    $registerBox.find('a.colMint').click(function() {
        $registerBox.hide();
        $loginBox.show();
    });
    //注册按钮
    $registerBox.find('button').click(function() {
        $.ajax({
            type:'post',
            url: '/api/user/register',
            data: {
                username: $registerBox.find('[name="username"]').val(),
                password: $registerBox.find('[name="password"]').val(),
                repassword: $registerBox.find('[name="repassword"]').val(),
            },
            dataType: 'json',
            success: function(result) {
                console.log(result);
            }
        });
    })
});