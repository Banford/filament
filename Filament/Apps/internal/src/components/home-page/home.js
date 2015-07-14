define(["require", "exports", 'knockout', "text!./home.html"], function(require, exports, ko) {
    exports.template = require('text!./home.html');

    var viewModel = (function () {
        function viewModel() {
            this.message = ko.observable('The Internal SPA is a Knockout SPA based on the patterns used in generator-ko.');
        }
        viewModel.prototype.doSomething = function () {
            this.message('You invoked doSomething() on the viewmodel.');
        };
        return viewModel;
    })();
    exports.viewModel = viewModel;
});
//# sourceMappingURL=home.js.map
