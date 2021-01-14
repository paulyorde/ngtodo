import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { NotesDialogComponent } from '../../dialogs/notes-dialog/notes-dialog.component';
import {NotesDialogService} from '../../services/notes-dialog.service';
import {from, Observable, of, ReplaySubject} from 'rxjs';

/*
** get most recent current submitted - based on time
** sort to top
*/

export interface DialogData {
  notes: string;
}

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})
export class RecentComponent implements OnInit {
  todoForm: FormGroup;
  todos: FormArray;
  notes;
  // notes: Observable<string[]> = new ReplaySubject();

  constructor(private fb: FormBuilder, private dialog: MatDialog) {}

  ngOnInit() {


    // this.notes = of(['note 1'])
  }

  openDialog(notes): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      notes
    };
    const dialogRef = this.dialog.open(NotesDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(v => console.log(v))
  }

  close(value) {

  }

  addNewTodo() {

  }

  removeTodo(index: number) {

  }

  addToUpcoming() {
    // mark template input with #upcoming-1
  }

  submitTodos() {
    console.log(this.todoForm.value);
  }

}
