import { Component } from '@angular/core';
import { producto } from 'src/app/productos/producto.models'

@Component({
  selector: 'app-bananas',
  templateUrl: '../producto.component.html',
  styleUrls: ['../producto.component.scss']
})
export class BananasComponent {

  frutas: producto[] = [];

  ngOnInit(){
  const fruta1 = new producto('https://w7.pngwing.com/pngs/728/616/png-transparent-asian-pear-d-anjou-fruit-tree-conference-pear-cherry.png', 
  500, "Banana")
  const fruta2 = new producto('https://cdn-icons-png.flaticon.com/512/415/415767.png', 
  250, "Pera animé")
  this.frutas.push(fruta1, fruta2)
  }


}
