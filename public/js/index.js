
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
            success:(result) => {
                $registerBox.find('.colWarning').html(result.message);
                if (!result.code) {
                    setTimeout(() => {
                        $registerBox.hide();
                        $loginBox.show();
                    },1000);
                    
                }
            }
        });
    });
    //登录
    $loginBox.find('button').click(function() {
        $.ajax({
            type:'post',
            url: '/api/user/login',
            data: {
                username: $loginBox.find('[name="username"]').val(),
                password: $loginBox.find('[name="password"]').val(),
            },
            dataType: 'json',
            success:(result) => {
                $loginBox.find('.colWarning').html(result.message);
                // if (!result.code) {
                //     setTimeout(() => {
                //         $registerBox.hide();
                //         $loginBox.show();
                //     },1000);
                    
                // }
            }
        });
    });
});