import babel      from 'gulp-babel';
import cssnano    from 'cssnano';
import gulp       from 'gulp';
import header     from 'gulp-header';
import postcss    from 'gulp-postcss';
import prefixer   from 'autoprefixer';
import sass       from 'gulp-sass';
import uglify     from 'gulp-uglify';

const copyright = `/*!\r
 * Design & Development by the N|Steam Contributors <https://github.com/orgs/node-steam/people/>\r
 * Made with <3 and JavaScript in Atom and SublimeText <https://atom.io/>, <https://www.sublimetext.com/>\r
 */\r\n`;

gulp.task('default', [
    'stylesheet',
    'javascript',
]);

gulp.task('watch', () => {
    // Watch Stylesheets
    gulp.watch('css/*.scss', ['stylesheet']);
    // Watch JavaScript
    gulp.watch('js/*.es', ['javascript']);
});

gulp.task('stylesheet', () => {
    return gulp.src('css/*.scss', {
        style: 'expanded',
    })
    .pipe(sass())
    .pipe(postcss([
        prefixer({
            browsers: ['last 1000 versions', '> 0%'],
        }),
        cssnano({
            discardComments: {
                removeAll: true,
            },
            mergeRules: true,
        }),
    ]))
    .pipe(header(copyright))
    .pipe(gulp.dest('css/'));
});

gulp.task('javascript', () => {
    return gulp.src('js/*.es')
    .pipe(babel({
        presets: [
            'es2015',
            'es2016',
            'es2017',
            'stage-3',
        ],
    }))
    .pipe(uglify())
    .pipe(header(copyright))
    .pipe(gulp.dest('js/'));
});
