import { Component, OnInit } from '@angular/core';
import {ReplaySubject} from 'rxjs';

const TASKS = [
  {task1: 'task1'},
  {task2: 'task2'}
];


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tasks$ = new ReplaySubject<any>();

  constructor() { }

  ngOnInit() {

  }

}
