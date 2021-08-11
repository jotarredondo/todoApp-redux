import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtrosValidos } from 'src/app/filtro/filtro.actions';
import { Todo } from '../models/todo-model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtroActual: filtrosValidos;

  constructor(private $appstore : Store<AppState>) { }

  ngOnInit(): void {
    /*
    this.$appstore.select('todos')
    .subscribe( todos => this.todos = todos); */
    
    this.$appstore.subscribe( state => {

      this.todos = state.todos;
      this.filtroActual = state.filtro;

    });


  }

}
