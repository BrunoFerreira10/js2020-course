const gulp = require('gulp')
const series = gulp.series

function copy(callback){
    console.log('Copy task!!!')
    return callback()
}


module.exports.default = series(copy)