import yargs from 'yargs';
const args = yargs
    .option('production', {
        boolean: true,
        default: false,
        describe: 'min all scripts'
    })

    .option('watch', { // watch 参数
        boolean: true,
        default: false,
        describe: 'watch all files'
    })

    .option('verbose', {
        boolean: true,
        default: false,
        describe: 'log'
    })

    .option('sourcemaps', {
        describe: 'force the creation of sroucemaps'
    })

    .option('port', {
        string: true,
        default: 8080,
        describe: 'server port'
    })

    .argv // 会返回对象，里面有之前配置的参数

export default args;