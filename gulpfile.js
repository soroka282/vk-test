const path = require('path');
const gulp = require("gulp");
const ghPages = require('gh-pages');
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const rename = require("gulp-rename");
const htmlmin = require("gulp-htmlmin");
const svgstore = require("gulp-svgstore");
const del = require("del");
const sync = require("browser-sync").create();

const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

//gh-pages
const deploy = (cb) => {
  ghPages.publish(path.join(process.cwd(), './build'), cb);
}
exports.deploy = deploy;

// Webpack
const webPack = () => {
  return gulp.src('./source/js/main.js')
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulp.dest('build/js'));
}

exports.webPack = webPack;

// Styles

const styles = () => {
  return gulp.src("source/css/*.css")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

// HTML

const html = () => {
  return gulp.src("source/*.html")
    .pipe(htmlmin({ collapseWhitespace: true,
      conservativeCollapse: true }))
    .pipe(gulp.dest("build"));
}

exports.html = html;

// Sprite

const sprite = () => {
  return gulp.src("source/img/sprite/*.svg")
    .pipe(svgstore())
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img/sprite"));
}

exports.sprite = sprite;

// Copy

const copy = (done) => {
  gulp.src([
    "source/fonts/*.{woff2,woff}"
  ],
  {
    base: "source"
  })
    .pipe(gulp.dest("build"))
  done();
}

exports.copy = copy;

// Clean

const clean = () => {
  return del("build");
};

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: "build"
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Reload

const reload = done => {
  sync.reload();
  done();
}

// Watcher

const watcher = () => {
  gulp.watch("source/css/**/*.css", gulp.series(styles));
  gulp.watch("source/js/*.js", gulp.series(webPack));
  gulp.watch("source/*.html", gulp.series(html, reload));
}

// Build

const build = gulp.series(
  clean,
  gulp.parallel(
    styles,
    html,
    webPack,
    sprite,
    copy,
  ));

exports.build = build;

// Default

exports.default = gulp.series(
  clean,
  gulp.parallel(
    styles,
    html,
    webPack,
    sprite,
    copy,
  ),
  gulp.series(
    server,
    watcher
  ));
