import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

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
    return this.http.get(`${environment.baseUrl}/product-view`);
  }

  getSearch(name: any, manufacturer: any): Observable<any> {
    const url = `${environment.baseUrl}/product-view/${name}/${manufacturer}`;
    return this.http.get<Product[]>(url);
  } 
}
