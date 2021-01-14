import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import {DialogData} from '../../components/recent/recent.component';

@Component({
  selector: 'app-notes-dialog',
  templateUrl: './notes-dialog.component.html',
  styleUrls: ['./notes-dialog.component.scss']
})
export class NotesDialogComponent implements OnInit {
  notes = 'note 1';
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)  notes,
    private dialogRef: MatDialogRef<NotesDialogComponent>,
    private formBuilder: FormBuilder) {
      this.notes = notes;
      this.form = formBuilder.group({
        notes: [notes]
      })
  }

  cancel(): void {
    this.dialogRef.close();
  }

  open() {

  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close(value) {
    this.dialogRef.close(value);
  }

  @HostListener('keydown.esc')
  onEsc() {
    this.close(false);
  }

  ngOnInit() {
    // this.form = this.formBuilder.group({
    //   notes: [this.notes]
    // });
  }

}
