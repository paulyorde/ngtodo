import { CurrentService } from './../../services/current/current.service'
import { Observable } from 'rxjs'
import {Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Current } from 'src/app/task/model/current.model';
import {MatAccordion} from '@angular/material';
import {NotesDialogService} from '../../services/notes-dialog.service';
import { TaskModule } from '../../task.module';
import { HttpClient } from '@angular/common/http';

const todo = {"meat": "get meatÍ"}

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit, OnChanges {
  todos$: Observable<Current>;

  currentItems: any[] = [];
  panelOpenState = false;
  @ViewChild(MatAccordion, {static: false}) accordion: MatAccordion;

  current = new FormControl('',
   {
    validators:
      [Validators.required],
      updateOn: 'blur'
   })

  remove = new FormControl('')

  form = new FormGroup({
    current: this.current,
    remove: this.remove
  })

  // todoForm: FormGroup;
  // todos$: FormArray;


  constructor(private fb: FormBuilder, private todoService: CurrentService) {}

  // creates an instance listener
  ngOnInit() {
    // get todos from json file
    this.todoService.getTodos().subscribe(x => console.log(x, ' current'))


    // this.form.valueChanges
    // // .pipe(
    // //   filter( () => this.form.valid)
    // // )
    // .subscribe( v => {
    //   console.log(v.current, ' value from init')
    //   this.currentItems.push(v.current)
    // })
  }

  // subscribs late, doesn't get 1st value -> must be in onInit
  // addItem(form: NgForm, e, todo: Current) {

  addItem() {

  this.todoService.addTodo()
    // console.log('addItem', this.currentItems)
  }

  deleteItem(form: NgForm, e) {
    // get the item

      // this.currentItems.pop(form.value)
    // remove from store

    // console.log(this.currentItems, ' after delete')
  }

  useItems() {
    // get formControll
    // if current
    // if delete
  }

  ngOnChanges(changes): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // console.log(changes.currentItems, ' items')
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.addItem()

  }



}
