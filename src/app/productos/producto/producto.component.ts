import { Component } from '@angular/core';
import { producto } from 'src/app/productos/producto.models'

@Component({
  selector: 'app-producto',
  templateUrl: '../producto.component.html',
  styleUrls: ['../producto.component.scss']
})

export class ProductoComponent {
  
  frutas: producto[] = [];

  ngOnInit(){
  const fruta1 = new producto('https://www.recetasnestlecam.com/sites/default/files/2022-04/tipos-de-manzana-royal-gala.jpg', 
  500, "Manzana Roja")
  const fruta2 = new producto('https://w7.pngwing.com/pngs/413/332/png-transparent-manzana-verde-apple-crisp-caramel-apple-apple-natural-foods-food-granny-smith.png', 
  250, "Manzana Verde")
  this.frutas.push(fruta1, fruta2)
  }
}
