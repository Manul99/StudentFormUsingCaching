import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentformForm2Component } from './studentform-form2.component';

describe('StudentformForm2Component', () => {
  let component: StudentformForm2Component;
  let fixture: ComponentFixture<StudentformForm2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentformForm2Component]
    });
    fixture = TestBed.createComponent(StudentformForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
