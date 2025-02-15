import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentformForm1Component } from './studentform-form1.component';

describe('StudentformForm1Component', () => {
  let component: StudentformForm1Component;
  let fixture: ComponentFixture<StudentformForm1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentformForm1Component]
    });
    fixture = TestBed.createComponent(StudentformForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
