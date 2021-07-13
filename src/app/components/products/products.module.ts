import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProductsComponent } from './products.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { ListProductsComponent } from './list-products/list-products.component';

@NgModule({
  declarations: [ProductsComponent, ProductViewComponent, ListProductsComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
  ],
  exports: [
    ProductsComponent,
    ProductViewComponent,
    ListProductsComponent,
  ],
  entryComponents: [
    ProductViewComponent,
    ListProductsComponent
  ]
})
export class ProductsModule { }
