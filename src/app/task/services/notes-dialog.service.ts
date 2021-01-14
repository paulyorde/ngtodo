import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {MatDialog, MatDialogRef} from '@angular/material';
import {NotesDialogComponent} from '../dialogs/notes-dialog/notes-dialog.component';
import {map, take} from 'rxjs/operators';

@Injectable()
export class NotesDialogService {

  constructor(private dialog: MatDialog) { }

  dialogRef: MatDialogRef<NotesDialogComponent>;

  open(options) {
    this.dialogRef = this.dialog.open(NotesDialogComponent, {
      width: '350px',
      height: '350px',
      data: {
        notes: options.notes
      }
    });
  }

  getData(): Observable<any> {
    return this.dialogRef.afterClosed()
      .pipe(take(1), map(res => {
        return [res];
      }));
  }
}
