// TODO: This file could be further broken down into separate task files. See css.js for example.

var chalk = require('chalk'),
    fs = require('fs'),
    es = require('event-stream'),
    vm = require('vm'),
    merge = require('deeply');

var gulp = require('gulp'),
    rjs = require('gulp-requirejs-bundler'),
    clean = require('gulp-clean'),
    replace = require('gulp-replace'),
    uglify = require('gulp-uglify'),
    htmlreplace = require('gulp-html-replace'),
    typescript = require('gulp-tsc');

var appBasePath = 'Apps/internal/';
var outputDir = './' + appBasePath + 'dist/';

// Config
var requireJsRuntimeConfig = vm.runInNewContext(fs.readFileSync(appBasePath + 'src/app/require.config.js') + '; require;');
requireJsOptimizerConfig = merge(requireJsRuntimeConfig, {
    out: 'scripts.js',
    baseUrl: './' + appBasePath + 'src',
    name: 'app/startup',
    paths: {
        requireLib: 'bower_modules/requirejs/require'
    },
    include: [
        'requireLib',
        'components/nav-bar/nav-bar',
        'components/home-page/home',
        'text!components/about-page/about.html'
    ],
    insertRequire: ['app/startup'],
    bundles: {
        // If you want parts of the site to load on demand, remove them from the 'include' list
        // above, and group them into bundles here.
        // 'bundle-name': [ 'some/module', 'another/module' ],
        // 'another-bundle-name': [ 'yet-another-module' ]
    }
});

// Compile all .ts files, producing .js and source map files alongside them
gulp.task('ts', function () {
    return gulp.src(['**/*.ts'])
        .pipe(typescript({
            module: 'amd',
            sourcemap: true,
            outDir: './'
        }))
        .pipe(gulp.dest('./'));
});

// Discovers all AMD dependencies, concatenates together all required .js files, minifies them
gulp.task('js', ['ts'], function () {
    return rjs(requireJsOptimizerConfig)
        .pipe(uglify({ preserveComments: 'some' }))
        .pipe(gulp.dest(outputDir));
});

// Removes all files from ./dist/, and the .js/.js.map files compiled from .ts
gulp.task('clean', function () {
    var distContents = gulp.src('./dist/**/*', { read: false }),
        generatedJs = gulp.src(['src/**/*.js', 'src/**/*.js.map', 'test/**/*.js', 'test/**/*.js.map'], { read: false })
            .pipe(es.mapSync(function (data) {
                // Include only the .js/.js.map files that correspond to a .ts file
                return fs.existsSync(data.path.replace(/\.js(\.map)?$/, '.ts')) ? data : undefined;
            }));
    return es.merge(distContents, generatedJs).pipe(clean());
});

gulp.task('default-internal', ['js', 'css'], function (callback) {
    callback();
});