import { Component } from '@angular/core';
import { PlatosComponent } from '../platos/platos.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  imports: [PlatosComponent,HttpClientModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
