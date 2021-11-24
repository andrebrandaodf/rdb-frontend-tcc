import { Product } from './../../../core/model/product.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductViewComponent } from '../product-view/product-view.component';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.products = this.data.products;
  }

  viewDetail(product: Product) {
    this.dialog.open(ProductViewComponent, {
      disableClose: true,
      minWidth: '25vw',
      maxWidth: '85vw',
      panelClass: 'custom-dialog-container',
      data: {
        product: product
      }
    });
  }

}
