import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {

  currentUrl: string;
  constructor(private location: Location) {
    this.currentUrl = this.location.path();
    
    if(this.currentUrl === "/manzanas"){
      
    }

  }
  
}
