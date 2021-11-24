import { Component, OnInit, HostListener } from '@angular/core';
import { Product } from 'src/app/core/model/product.model';
import { Validators, FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/core/service/product.service';
import { MatDialog } from '@angular/material/dialog';
import { ListProductsComponent } from 'src/app/components/products/list-products/list-products.component';

@Component({
  selector: 'app-control-quality',
  templateUrl: './control-quality.component.html',
  styleUrls: ['./control-quality.component.css']
})
export class ControlQualityComponent implements OnInit {
  
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

  searchListProduct() {
    if (this.formProduct.valid) {
      this.productService.getSearch(
        this.formProduct.controls.name.value,
        this.formProduct.controls.manufacturer.value
      ).subscribe((res: Product) => {
        this.dialog.open(ListProductsComponent, {
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
