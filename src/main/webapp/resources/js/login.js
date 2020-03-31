
// login
layui.use(['form','layer','jquery'], function () {
	// 操作对象
	var form = layui.form;
	var $ = layui.jquery;
	var layer  = layui.layer;
	form.on('submit(login)', function () {
		    var mycode=$('#login_code').val() ;
			var useraccount = $('#login_account').val();
			var password = $('#login_password').val();
				$.ajax({
				type:"post",
				url: "/tpes/dologin",
				// dataType: "json",
				//发送的数据（同时也将数据发送出去）
				data: {login_account:useraccount,login_password:password,mycode:mycode},
				success: function (msg) {
					// var res = msg.toString();
					// layer.msg(msg);
					var res = msg;
					// layer.msg(res);
					if (res === "false") {
						layer.msg("登录失败");
					}else if (res==="nopass") {
						layer.msg("账号或密码错误");
						// layer.msg(res) ;
					}else if (res==="errorcode") {
						layer.msg("验证码错误哦");
						// layer.msg(res) ;
					}else {
						window.location.href="/tpes/doctor"
					}

				},
				error: function (msg) {
					alert("服务器正忙。。。。"+msg);
				}
			});
			return false;

	});
});

function myclick() {
	$('#verImg').attr('src', "/tpes/captcha?"+Math.random());

	//
	// $.ajax({
	// 	type: "post",
	// 	url: "",
	// 	dataType: "text",
	// 	//发送的数据（同时也将数据发送出去）
	// 	data: {0: 0},
	// 	success: function (res) {
	// 		console.log(res);
	//
	// 	},
	// 	error: function (msg) {
	// 		alert("服务器正忙。。。。" + msg);
	// 	}
	// });
	//

}






