const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass');
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const fileInclude = require('gulp-file-include');
const webpackStream = require('webpack-stream');
const uglify = require('gulp-uglify-es').default;
const htmlmin = require('gulp-htmlmin');

const styles = () =>
  src('./src/scss/**/*.scss')
    .pipe(
      sass({
        outputStyle: 'expanded',
      }).on('error', notify.onError())
    )
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(dest('./app/css/'))
    .pipe(browserSync.stream());

const htmlInclude = () =>
  src('./src/index.html')
    .pipe(
      fileInclude({
        prefix: '@',
        basepath: '@file ',
      })
    )
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
      })
    )
    .pipe(dest('./app'))
    .pipe(browserSync.stream());

const img = () => src('./src/img/**').pipe(dest('./app/img'));

const scripts = () =>
  src('./src/js/main.js')
    .pipe(
      webpackStream({
        output: {
          filename: 'main.js',
        },
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [['@babel/preset-env', { targets: 'defaults' }]],
                },
              },
            },
          ],
        },
      })
    )
    .pipe(uglify().on('error', notify.onError()))
    .pipe(dest('./app/js'))
    .pipe(browserSync.stream());

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: './app',
    },
  });
  watch('./src/scss/**/*.scss', styles);
  watch('./src/index.html', htmlInclude);
  watch('./src/img/**', img);
  watch('./src/js/**', scripts);
};

exports.styles = styles;
exports.htmlInclude = htmlInclude;
exports.img = img;
exports.watchFiles = watchFiles;
exports.scripts = scripts;
exports.default = series(styles, htmlInclude, img, scripts, watchFiles);
