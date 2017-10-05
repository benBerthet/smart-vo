var fs = require('fs')
var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var sass = require('gulp-sass')
var uglify = require('gulp-uglify')
var autoprefixer = require('gulp-autoprefixer')
var plumber = require('gulp-plumber')
var minimist = require('minimist')
var webpack = require('gulp-webpack')

var knownOptions = {
  boolean: 'production',
  default: { production: false }
}

var options = minimist(process.argv.slice(2), knownOptions)

gulp.task('sass', function () {
  if (options.production)		{
    return gulp.src('src/scss/**/*.scss')
			.pipe(plumber())
			.pipe(sass.sync({
	  outputStyle: 'compressed',
	  errLogToConsole: true
}))
			.pipe(autoprefixer({
	            browsers: ['last 4 versions'],
	            cascade: false
	        }))
			.pipe(gulp.dest('public/assets/css'))
			.pipe(browserSync.stream())
  } else {
    return gulp.src('src/scss/*.scss')
			.pipe(plumber())
			.pipe(sass.sync({
  errLogToConsole: true
}))
			.pipe(gulp.dest('public/assets/css'))
			.pipe(browserSync.stream())
  }
})

gulp.task('webpack', function () {
  if (options.production)		{
    return gulp.src(['src/js/main.js'])
			.pipe(webpack(require('./webpack.production.config.js')))
			.pipe(gulp.dest('public/assets/js/'))
			.pipe(browserSync.stream())
  } else {
    return gulp.src(['src/js/main.js'])
			.pipe(webpack(require('./webpack.config.js')))
			.pipe(gulp.dest('public/assets/js/'))
			.pipe(browserSync.stream())
  }
})

gulp.task('default', ['webpack', 'sass'], function () {
		    browserSync.init({
      server: {
        baseDir: './public'
      },
	        notify: false
	    	})

  gulp.watch('src/js/**/*.js', ['webpack'])
  gulp.watch('src/scss/**/*.scss', ['sass'])

  gulp.watch('public/*.html').on('change', browserSync.reload)
})
