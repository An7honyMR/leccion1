import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {
  lema:string = "Nuestro Lema"
  contenido:string = "¡El cliente siempre tiene la razón!"


}
