/// <vs AfterBuild='default' />
var chalk = require('chalk'),
    requireDir = require('require-dir');

var gulp = require('gulp');

// Build up tasks for each single page applcation
var apps = ['internal', 'external'];
var appTasks = [];
for (var i = 0; i < apps.length; i++) {
    var app = apps[i];
    requireDir("Apps/" + app + "/tasks");
    var taskName = 'build-' + app;
    gulp.task(taskName, ['default-' + app]);
    appTasks.push(taskName);
}

console.log(appTasks);

// Default task builds all applications
gulp.task('default', appTasks, function (callback) {
    callback();
});
