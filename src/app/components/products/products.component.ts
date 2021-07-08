import { Component, HostListener, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/service/product.service';
import { Product } from 'src/app/core/model/product.model';
import { MatDialog } from '@angular/material/dialog';
import { ProductViewComponent } from './product-view/product-view.component';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product: Product[] = [];

  innerWidth: number = 0;

  formProduct = this.fb.group({
    name: [null, [Validators.required]],
    manufacturer: [null, [Validators.required]],
  })

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  constructor(
    private productService: ProductService,
    public dialog: MatDialog,
    private fb: FormBuilder,
  ) {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit(): void { }

  searchProduct() {
    if (this.formProduct.valid) {
      this.productService.getSearch(
        this.formProduct.controls.name.value,
        this.formProduct.controls.manufacturer.value
      ).subscribe((res: any) => {
        this.dialog.open(ProductViewComponent, {
          disableClose: true,
          minWidth: '25vw',
          maxWidth: '90vw',
          panelClass: 'custom-dialog-container',
          data: {
            products: res
          }
        });
      })
    }

  }
}
