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
  const fruta1 = new producto('https://e7.pngegg.com/pngimages/796/636/png-clipart-banana-fruit-food-rendering-banana-food-fruit.png', 
  200, "Banana")
  const fruta2 = new producto('https://ih1.redbubble.net/image.2463686517.9046/st,small,507x507-pad,600x600,f8f8f8.jpg', 
  250, "Banana Fachera")
  const fruta3 = new producto('../assets/bananaTentaculo.jpg', 
  300, "Banana Tentaculo")
  this.frutas.push(fruta1, fruta2, fruta3)
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
