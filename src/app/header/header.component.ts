import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template:`
    <div id="header">
      <a href=""> <h1>AprendiendoAngular</h1></a>
      <div class="nav">
        <a href="/manzanas">|Manzanas</a>
          <a href="/peras">|Peras</a>
          <a href="/bananas">|Bananas</a>
      </div>
    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
