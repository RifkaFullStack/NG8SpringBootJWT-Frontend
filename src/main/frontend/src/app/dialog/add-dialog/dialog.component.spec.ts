import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ADDDialogComponent } from './dialog.component';

describe('ADDDialogComponent', () => {
  let component: ADDDialogComponent;
  let fixture: ComponentFixture<ADDDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADDDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ADDDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
