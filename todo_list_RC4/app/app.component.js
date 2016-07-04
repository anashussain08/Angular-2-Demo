"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
var AppComponent = (function () {
    function AppComponent() {
        this.todos = [];
    }
    AppComponent.prototype.add = function (newtodo) {
        this.todos.push(newtodo);
        this.todo(newtodo);
    };
    AppComponent.prototype.todo = function (arg) {
        var subject = new Subject_1.Subject();
        subject.subscribe(function (value) {
            console.log('recieved from observable' + value);
        });
        subject.next(arg);
        console.log(subject.asObservable());
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Todo List</h1>\n    <input type='text' #todoInput todoInput.value = ''>\n    <button (click)='add(todoInput.value)' todoInput.value = ''>Add</button>\n    <ul>\n    <li *ngFor=\"let item of todos\">{{item}}</li>\n    </ul>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map