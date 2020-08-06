import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookersComponent } from './bookers.component';

describe('BookersComponent', () => {
  let component: BookersComponent;
  let fixture: ComponentFixture<BookersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
