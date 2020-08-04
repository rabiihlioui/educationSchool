import { TestBed } from '@angular/core/testing';

import { ActiveMenuItemService } from './active-menu-item.service';

describe('ActiveMenuItemService', () => {
  let service: ActiveMenuItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveMenuItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
