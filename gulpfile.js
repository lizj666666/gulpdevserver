const gulp = require('gulp');
const connect = require('gulp-connect');

gulp.task('webserver',()=>{
    connect.server({
 
       livereload:true,
 
       port:8966
 
    });
});
 
gulp.task('default',['webserver']);