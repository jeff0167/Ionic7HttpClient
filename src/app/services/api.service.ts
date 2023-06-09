import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Student } from '../models/student';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // API path
  base_path = 'http://localhost:3000/students';  // IMPORTANT: you use    npx json-server --watch API/data.json   to start the server

  // OR
  // top run the server, open a new cmd, from the windows search field
  // json-server --watch API/data.json

  // remember ionic serve --open

  constructor(public http: HttpClient) { }
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  // Create a new item
  createItem(item: Student): Observable<Student> {
    return this.http.post<Student>(this.base_path, JSON.stringify(item), this.httpOptions);
  }

  // Get single student data by ID
  getItem(id: number): Observable<Student> {
    return this.http.get<Student>(this.base_path + '/' + id);
  }

  // Get students data
  getList(): Observable<Student> {
    return this.http
      .get<Student>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Update item by id
  updateItem(id: number, item: Student): Observable<Student> {
    return this.http.put<Student>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions);
  }

  // Delete item by id
  deleteItem(id: number) {
    return this.http.delete<Student>(this.base_path + '/' + id, this.httpOptions);
  }
}
