const gulp = require('gulp')
const {series, parallel} = require('gulp')

const {appHTML, appCSS, appJS, appIMG} = require('./gulpTasks/app')
const {depsCSS, depsFonts} = require('./gulpTasks/deps')
const {monitorFiles, server} = require('./gulpTasks/server')

module.exports.default = series (
    parallel (
        series(appHTML, appCSS, appJS, appHTML),
        series(depsCSS, depsFonts)
    ),
    server,
    monitorFiles
)