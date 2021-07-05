import { Component, HostListener, OnInit } from '@angular/core';
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

  innerWidth: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  constructor(private productService:ProductService, private http: HttpClient) { 
    this.innerWidth = window.innerWidth;
  }

  ngOnInit(
    
  ): void {
    
  }

  readById(id: number) {
    const url = `${environment.baseUrl}/product/${id}`;
    return this.http.get<Product>(url);
  } 
}
