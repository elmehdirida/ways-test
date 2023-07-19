import { Route } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import {HomeComponent} from "./home/home/home.component";

export const appRoutes: Route[] = [
  { path: '' , component: HomeComponent},
  { path :"letter" , component : PrincipalComponent }
];
