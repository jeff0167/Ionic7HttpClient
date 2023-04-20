import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentCreatePage } from './student-create.page';

describe('StudentCreatePage', () => {
  let component: StudentCreatePage;
  let fixture: ComponentFixture<StudentCreatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudentCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
