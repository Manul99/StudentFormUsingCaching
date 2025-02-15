import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentformMainformComponent } from './studentform-mainform.component';

describe('StudentformMainformComponent', () => {
  let component: StudentformMainformComponent;
  let fixture: ComponentFixture<StudentformMainformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentformMainformComponent]
    });
    fixture = TestBed.createComponent(StudentformMainformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
