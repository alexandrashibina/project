const { src, dest, task } = require("gulp");
const rm = require ("gulp-rm");

task("clean", () => {
    return gulp.src("dist/**/*", { read: false })
      .pipe(rm());
});

function copy() {
    return src("src/**/*")
    .pipe(dest("dist"));
}

exports.copy = copy