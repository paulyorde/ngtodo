import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {
  todoForm: FormGroup;
  todos: FormArray;

  // get current list of upcoming and any new ones during current application
  @Input() upcoming: any[]

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.todos = this.fb.array([
      this.fb.control('')
    ])
    this.todoForm = this.fb.group({
      todos: this.todos
    })
  }

  //  pickup emited todo when marked as upcoming
  getUpcomingTodos() {

    // subscribe
  }

  addNewTodo() {
    //add new Control(input) to FormArray Dynamically
    this.todos.push(this.fb.control(''));

  }

  // selects the index via template logic
  removeTodo(index: number) {
    this.todos.removeAt(index);
  }

  // grabs all form data using ngSubmit in template
  submitTodos() {
    console.log(this.todoForm.value);
  }



}
