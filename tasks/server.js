import gulp from 'gulp';//引入gulp 自动化构建工具
import gulpif from 'gulp-if';//gulp 语句中作if判断
import liveserver from 'gulp-live-server' //起动作为服务器的包
import args from './util/args';//对命令行参数进行解析的包

gulp.task('serve',(cb)=>{
	if(!args.watch) return cb();// 只有 watch 参数才会触发架设 web 服务

	var server = liveserver.new(['--harmony','server/bin/www']);
	server.start();// 开启 web 服务器
	// 这里真正使用了 gulp 的 watch 监听功能
    // 先通知 web 服务器有哪些文件变动了
	gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
		// 会被加载到 web 的文件缓存中
		server.notify.apply(server,[file]);
	})
	// 重新启动 web服务器，相当于重新加载所有文件，实现了自动加载
	gulp.watch(['server/routes/**/*.js','server/app.js'],function () {
		server.start.bind(server)()
	});
})
