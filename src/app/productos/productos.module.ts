import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import { ProductoComponent } from './producto/producto.component';
import { PerasComponent } from './peras/peras.component';
import { BananasComponent } from './bananas/bananas.component';



@NgModule({
  declarations: [
    ProductosComponent,
    ProductoComponent,
    PerasComponent,
    BananasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductosComponent
  ]
})
export class ProductosModule { }
