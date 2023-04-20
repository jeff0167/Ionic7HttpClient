import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentEditPage } from './student-edit.page';

describe('StudentEditPage', () => {
  let component: StudentEditPage;
  let fixture: ComponentFixture<StudentEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudentEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
