
	NProgress.start();

	NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	if (!$.cookie('PHPSESSID') && location.pathname != '/login') {
		location.href = 'login';
	}

	if (location.pathname != '/login' && location.pathname != '/dashboard/login' && location.pathname != '/views/dashboard/login') {
		var tcInfo = JSON.parse($.cookie('tcInfo')); // 把字符串转换成对象
		console.log(tcInfo);

		var htmlStr = template('tp_aside_avatar', tcInfo); // 拼接模板字符串
		$('.aside>.profile').html(htmlStr); //渲染模板
	}
	
	// require.config({
	// 	baseUrl : '/',
	// 	paths : {
	// 		'jquery':'views/public/assets/jquery/jquery.min',
	// 		'bootstrap':'views/public/assets/bootstrap/js/bootstrap.min',
	// 		'nprogress':'views/public/assets/nprogress/nprogress',
	// 		'cookie':'views/public/assets/jquery-cookie/jquery.cookie',
	// 		'template':'views/public/assets/artTemplate/template-debug',
	// 		'common':'views/public/js/dashboard/common'
	// 	},
	// 	shim : {
	// 		'bootstrap':{
	// 			deps : ['jquery']
	// 		}
	// 	}
	// });

	