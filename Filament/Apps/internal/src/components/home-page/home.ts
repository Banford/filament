/// <amd-dependency path="text!./home.html" />
import ko = require('knockout');
export var template: string = require('text!./home.html');

export class viewModel {
    message = ko.observable('The Internal SPA is a Knockout SPA based on the patterns used in generator-ko.');

    doSomething() {
        this.message('You invoked doSomething() on the viewmodel.');
    }
}
