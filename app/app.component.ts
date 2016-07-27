import {Component} from '@angular/core';

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent {
    title: string;
    todos: string[];

    constructor() {
        this.title = 'Angular 2Doing!';
        this.todos = ['cdc'];
    }
    
    addTodo(event: any) {
        if(event.type === 'keyup' && event.which === 13) {
            console.log(event);
            this.todos.push(event.target.value);
        }
    }
}