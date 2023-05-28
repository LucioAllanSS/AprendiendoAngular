import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template:`
    <div id="header">
      <h1>AprendiendoAngular</h1>
      <div class="nav">
          <a href="">|Sección 1</a>
          <a href="">|Sección 2</a>
          <a href="">|Sección 3</a>
      </div>
    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
