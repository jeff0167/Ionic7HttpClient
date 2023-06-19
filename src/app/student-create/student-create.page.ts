import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Student } from '../models/student';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.page.html',
  styleUrls: ['./student-create.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule]
})
export class StudentCreatePage {

  data: Student

  constructor(public apiService: ApiService, public router: Router) {
    this.data = new Student();
  }

  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['student-list']);
    });

  }
}
