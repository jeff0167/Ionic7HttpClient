import { Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'student-list',
    pathMatch: 'full',
  },
  {
    path: 'student-create',
    loadComponent: () => import('./student-create/student-create.page').then( m => m.StudentCreatePage)
  },
  {
    path: 'student-edit',
    loadComponent: () => import('./student-edit/student-edit.page').then( m => m.StudentEditPage)
  },
  {
    path: 'student-list',
    loadComponent: () => import('./student-list/student-list.page').then( m => m.StudentListPage)
  },
  {
    path: 'student-detail',
    loadComponent: () => import('./student-detail/student-detail.page').then( m => m.StudentDetailPage)
  },
];
