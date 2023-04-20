import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentDetailPage } from './student-detail.page';

describe('StudentDetailPage', () => {
  let component: StudentDetailPage;
  let fixture: ComponentFixture<StudentDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudentDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
