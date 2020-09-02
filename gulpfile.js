//здесь не скачаны плагины для автоматического перевода px в rem (gulp-smile-px2rem)
//также нет плагина для продвинутого импорта стилей (gulp-sass-glob)
//также нет плагина для работы с svg файлами

const { src, dest, task, series, watch, parallel } = require("gulp"); 
const rm = require ("gulp-rm");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const reload = browserSync.reload;
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');

const env = process.env.NODE_ENV;

const {DIST_PATH, STYLES_LIBS, JS_LIBS, SRC_PATH} = require("./gulp-config");

sass.compiler = require('node-sass');

task("clean", () => {
    return src(`${DIST_PATH}/**/*`, { read: false }).pipe(rm());
});

task("copy:html", () => {
    return src(`${SRC_PATH}/*.html`)
    .pipe(dest(DIST_PATH))
    .pipe(reload({ stream: true }));
});

task("copy:img", () => {
    return src(`${SRC_PATH}/img/*`)
    .pipe(dest(`${DIST_PATH}/img`))
    .pipe(reload({ stream: true }));
});

task("styles", () => {
    return src([...STYLES_LIBS, "src/layout/main.scss"])
        .pipe(gulpif(env == "dev", sourcemaps.init()))
        .pipe(concat("main.min.scss"))
        .pipe(sass().on("error", sass.logError))
        .pipe(gulpif(env == "dev", autoprefixer({
            cascade: false
        })))
        .pipe(gulpif(env == "prod", gcmq()))
        .pipe(gulpif(env == "prod", cleanCSS()))
        .pipe(gulpif(env == "dev", sourcemaps.write()))
        .pipe(dest(DIST_PATH))
        .pipe(reload({ stream: true}));
});

task("scripts", () => {
    return src([...JS_LIBS, "src/js/*.js"])
    .pipe(gulpif(env == "dev", sourcemaps.init()))
    .pipe(concat("main.min.js", {newLine: ";"}))
    .pipe(gulpif(env =="dev", babel({
        presets: ['@babel/env']
    })))
    .pipe(gulpif(env == "prod", uglify()))
    .pipe(gulpif(env == "dev", sourcemaps.write()))
    .pipe(dest(DIST_PATH))
    .pipe(reload({ stream: true}));
})

task("server", () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        open: false
    });
});

task("watch", () => {
    watch("./src/layout/**/*.scss", series("styles"));
    watch("./src/*.html", series("copy:html"));
    watch("./src/js/*.js", series("scripts"));
})

task(
    "default", 
    series("clean", 
    parallel("copy:html", "copy:img", "styles", "scripts"), 
    parallel("watch", "server")));


task(
    "build",
    series("clean",
    parallel("copy:html", "copy:img", "styles", "scripts"))
);