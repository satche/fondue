/********************************
* MODULES IMPORTATION
********************************/
const gulp = require("gulp");
const dotenv = require("dotenv").config();
const del = require("del");

/********************************
* PATHS
********************************/
const path = {
	html: {
		src: process.env.PATH_SOURCES + "*.{html,php}",
		dest: process.env.PATH_DESTINATION
	}
}

/********************************
* TASKS DEFINITION
********************************/
/**
 * Clean task
 * Delete destination folder
 */
const clean = () => {
	return del(process.env.PATH_DESTINATION + "**");
}

/**
 * HTML task
 */
const html = () => {
	return gulp.src(path.html.src)
		.pipe(gulp.dest(path.html.dest));
};

gulp.watch(path.html.src, html)

/********************************
* SERIES OF TASKS
********************************/
const tasks = gulp.series(
	clean,
	gulp.parallel(html)
);
exports.default = tasks;