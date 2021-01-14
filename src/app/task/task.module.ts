import { UpcomingService } from './services/upcoming/upcoming.service'
import { RecentService } from './services/recent/recent.service'
import { CurrentService } from './services/current/current.service'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentComponent } from './components/current/current.component';
import { RecentComponent } from './components/recent/recent.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { RecentDirective } from './directives/recent/recent.directive';
import { CurrentDirective } from './directives/current/current.directive';
import { TaskPipe } from './pipes/task.pipe';
import { TaskComponent } from './task.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NotesDialogComponent } from './dialogs/notes-dialog/notes-dialog.component';


@NgModule({
  declarations: [CurrentComponent, RecentComponent, UpcomingComponent, RecentDirective, CurrentDirective, TaskPipe, TaskComponent,
    NotesDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    CurrentService,
    RecentService,
    UpcomingService
  ],
  entryComponents: [
    NotesDialogComponent
  ],
  exports: [
    CurrentComponent,
    RecentComponent,
    UpcomingComponent,
    TaskComponent
  ]
})
export class TaskModule { }
