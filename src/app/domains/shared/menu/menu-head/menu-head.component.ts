import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-menu-head',
  standalone: true,
  imports: [],
  templateUrl: './menu-head.component.html',
  styleUrl: './menu-head.component.css'
})
export class MenuHeadComponent {
  hideSideMenu = signal(true);

  toogleSindeMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }

}
