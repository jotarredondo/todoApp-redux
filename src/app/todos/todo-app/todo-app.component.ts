import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { crear } from '../todo.action';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {

  txtInput: FormControl;

  constructor(private $appstore: Store<AppState>) { 
    this.txtInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
  }

  agregar() {
    
    if (this.txtInput.invalid) {
        return;
    }


    this.$appstore.dispatch(crear({texto: this.txtInput.value }));
    this.txtInput.reset();
  }

}
