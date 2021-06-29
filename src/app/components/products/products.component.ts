import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product: Product[] = [];

  constructor(private productService:ProductService, private http: HttpClient) { }

  ngOnInit(
    
  ): void {
    
  }

  readById(id: number) {
    const url = `${environment.baseUrl}/product/${id}`;
    return this.http.get<Product>(url);
  } 
}
