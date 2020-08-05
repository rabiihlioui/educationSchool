import { TestBed } from '@angular/core/testing';

import { ManageTeachersService } from './manage-teachers.service';

describe('ManageTeachersService', () => {
  let service: ManageTeachersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageTeachersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
