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
  const fruta1 = new producto('../assets/Manzana.png', 
  500, "Manzana Roja")
  const fruta2 = new producto('../assets/manzanaVerde.png', 
  250, "Manzana Verde")
  this.frutas.push(fruta1, fruta2)
  }

  public comboO = document.getElementById('combo') as HTMLSelectElement | null

  ngAfterViewInit(){
    this.frutas.sort((a, b) => a.precio - b.precio);
    this.comboO?.addEventListener('click', (event) => {
      console.log(this.comboO?.value);
        if (this.comboO?.value === "menorPrecio"){
          this.frutas.sort((a, b) => a.precio - b.precio);
        } else if (this.comboO?.value === "mayorPrecio") {
          this.frutas.sort((a, b) => b.precio - a.precio);
        }
      })
  }
}
