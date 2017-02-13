const config = require('../config');
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const path = require('path');

var task = config.tasks.lint;

gulp.task('lint', () => {
    var source = task.glob.map((src) => {
        if (src.startsWith('!'))
        {
            return '!' + path.join(config.root.src, src.substring(1));
        }

        return path.join(config.root.src, src)
    })

    return gulp.src(source)
        .pipe(eslint(task.eslint))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});