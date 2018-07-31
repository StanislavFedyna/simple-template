var gulp         = require('gulp'), 
    sass         = require('gulp-sass'), 
    browserSync  = require('browser-sync'), 
    csscomb      = require('gulp-csscomb');

gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('sass/**/*.scss') // Берем источник
        .pipe(csscomb())
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('../simpleTemplate/css')) // Выгружаем результата в папку src/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: '../simpleTemplate/' // Директория для сервера - src
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('sass/main.scss', ['sass']); // Наблюдение за sass файлами в папке sass
    gulp.watch('*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
});

