 app.service('todo', function($localStorage) {
    this.add = function (str) {
        return "Task Added";
    };
    this.remove = function (str) {
        return "Task Removed";
    };
    this.get = function (str) {
        return str;
    };
});