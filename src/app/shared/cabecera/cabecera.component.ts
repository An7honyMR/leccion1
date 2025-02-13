import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  imports: [],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {
  titulo:string = "Acerca de nosotros"
  parrafo:string = "Empresa dedicada a los platos típicos de comida con 20 años de experiencia. Gastronomía local, lo mejor del país. Contamos con servicio a domicilio, consulta disponibilidad."
  contacto:string = "Contacto"
}
