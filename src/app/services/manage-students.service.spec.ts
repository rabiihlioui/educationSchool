import { TestBed } from '@angular/core/testing';

import { ManageStudentsService } from './manage-students.service';

describe('ManageStudentsService', () => {
  let service: ManageStudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageStudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
