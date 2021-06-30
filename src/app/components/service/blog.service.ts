import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Blog } from '../model/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private snackBar: MatSnackBar,private http: HttpClient) { }
  
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }
  getAll() {
    return this.http.get(`${environment.baseUrl}/blog`);
  }

  read() {
    return this.http.get(`${environment.baseUrl}/blog`);
  }

  readById(id: number) {
    const url = `${environment.baseUrl}/blog/${id}`;
    return this.http.get<Blog[]>(url);
  } 
}
