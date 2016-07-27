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
    
    addTodo(input:HTMLInputElement) {
        let title = input.value;
        input.value = '';
        console.log('title', title);
        this.todos.push(title);
    }
}