import gulp from 'gulp';//引入gulp 自动化构建工具
import gulpSequence from 'gulp-sequence';// 处理包的顺序问题
// 用中括号的意思是任务是平行的，不存在先后
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']))