import gulp from 'gulp';
import del from 'del';
// 如果在这个任务里面没有命令行参数的话，也可以不导入
import args from './util/args'; 
gulp.task('clean',()=>{ // 使用 es6语法做函数写法
  return del(['server/public','server/views']) // 清空2个目录的文件
})