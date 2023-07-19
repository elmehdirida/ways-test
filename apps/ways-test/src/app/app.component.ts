import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {PrincipalComponent} from "./principal/principal.component";
import { MatNativeDateModule } from '@angular/material/core';
import { DataAccessModule, LetterService } from '@ways-test/data-access';
import { HomeComponent } from './home/home/home.component';

@Component({
    standalone: true,
    selector: 'ways-test-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterModule, PrincipalComponent, MatNativeDateModule, DataAccessModule, HomeComponent]
})
export class AppComponent  {
  constructor() {}

  title = 'ways-test';
}
