
const gulp = require('gulp');
const sass = require('gulp-sass');


// ------------------------------------------------------------------------------ task : app.scss
const appScssSrc = 'src/tabs-demo.scss';
const appScssWatchSrc = appScssSrc;
gulp.task('app.scss', cb => {

    gulp.src(appScssSrc)

        .pipe(sass({
            errLogToConsole: true,
            //outputStyle: "compressed"
        }))

        .pipe(gulp.dest(path.join("src")))
        .on('finish', () => {
            cb();
        });

});


// ------------------------------------------------------------------------------ task : default / watch

gulp.task('default', ['app.scss'], cb => { //,

    gulp.watch(appScssWatchSrc, ['app.scss']);

});

 