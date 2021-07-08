import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Blog } from '../model/blog.model';
import { Observable } from 'rxjs';

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
  getAll(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/blog-view`);
  }

  getWithPagination(pageNumber: any , pageSize: any) {
    let params = new HttpParams();
    params = params.append('pageNumber', pageNumber );
    params = params.append('pageSize', pageSize );
    return this.http.get(`${environment.baseUrl}/blog-view`, {params});
  }

  getById(id: number) {
    const url = `${environment.baseUrl}/blog-view/${id}`;
    return this.http.get<Blog[]>(url);
  } 
}
