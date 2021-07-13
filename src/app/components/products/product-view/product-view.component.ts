import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/core/model/product.model';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  product: Product;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.product = this.data.product;
   }

  ngOnInit(): void { }

}
