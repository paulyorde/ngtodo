import { TestBed } from '@angular/core/testing';

import { NotesDialogService } from './notes-dialog.service';

describe('NotesDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotesDialogService = TestBed.get(NotesDialogService);
    expect(service).toBeTruthy();
  });
});
