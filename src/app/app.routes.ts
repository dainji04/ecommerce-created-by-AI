import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartComponent } from './components/cart/cart.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
];

export const routes: Routes = appRoutes;