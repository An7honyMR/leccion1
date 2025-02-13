import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from './shared/cabecera/cabecera.component'
import { IntroComponent } from './shared/intro/intro.component';
import { CarruselComponent } from './shared/carrusel/carrusel.component';
import { PlatosComponent } from './shared/platos/platos.component';
import { HomeComponent } from './shared/home/home.component';
import { MenuComponent } from './shared/menu/menu.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CabeceraComponent,IntroComponent,CarruselComponent,PlatosComponent,HomeComponent,MenuComponent,RouterLink,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'leccion1';
}
