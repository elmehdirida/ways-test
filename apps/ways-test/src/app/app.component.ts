import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {PrincipalComponent} from "./principal/principal.component";
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  standalone: true,
  imports: [ RouterModule, PrincipalComponent, MatNativeDateModule],
  selector: 'ways-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ways-test';
}
