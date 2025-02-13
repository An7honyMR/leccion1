import { Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { MenuComponent } from './shared/menu/menu.component';

export const routes: Routes = [
    {path:'',component: HomeComponent},
    {path:'menu',component: MenuComponent},
];
