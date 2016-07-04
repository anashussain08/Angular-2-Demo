import {Component} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Component({
    selector:'my-app',
    template:`<h1>Todo List</h1>
    <input type='text' #todoInput todoInput.value = ''>
    <button (click)='add(todoInput.value)' todoInput.value = ''>Add</button>
    <ul>
    <li *ngFor="let item of todos">{{item}}</li>
    </ul>
    `
})

export class AppComponent{
    todos = [];
    add(newtodo){
        this.todos.push(newtodo);
        this.todo(newtodo)
    }
    todo(arg){
        let subject = new Subject();
        subject.subscribe(
            value=>{
                console.log('recieved from observable'+value)
            }
        )
        subject.next(arg)
        console.log(subject.asObservable())
        
    }

}