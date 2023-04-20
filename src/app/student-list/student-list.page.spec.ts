import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentListPage } from './student-list.page';

describe('StudentListPage', () => {
  let component: StudentListPage;
  let fixture: ComponentFixture<StudentListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudentListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
