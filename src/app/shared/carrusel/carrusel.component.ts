import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  imports: [],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {

  imagenes:any[] = [
    {"src":"https://c.files.bbci.co.uk/DBBF/production/_105055265_bandejapaisa.jpg"},
    {"src":"https://blog.contraelcancer.es/wp-content/uploads/2020/03/iStock-1017706758-mod.jpg"},
    {"src":"https://images.ecestaticos.com/kur2mmU6fiXX571utnIfe5RskMY=/0x0:0x0/1200x899/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Ffa4%2F2bd%2F398%2Ffa42bd398ffcbc07efc40870b6436f87.jpg"}
  ]

}
