import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../models/student';
import { ApiService } from '../services/api.service';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.page.html',
  styleUrls: ['./student-edit.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, HttpClientModule]
})
export class StudentEditPage implements OnInit {

  id: number;
  data: Student;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) {
    this.data = new Student();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.apiService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }

  update() {
    //Update item by taking id and updated data object
    this.apiService.updateItem(this.id, this.data).subscribe(response => {
      this.router.navigate(['student-list']);
    })
  }

}
