import { Component } from '@angular/core';
import { IntroComponent } from '../intro/intro.component';
import { CarruselComponent } from '../carrusel/carrusel.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [IntroComponent,CarruselComponent,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
