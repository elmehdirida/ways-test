import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { MatNativeDateModule } from '@angular/material/core';
import { DataAccessModule, LetterService } from '@ways-test/data-access';
import { HomeComponent } from './home/home/home.component';
import { NgClass, NgForOf } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'ways-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterModule,
    PrincipalComponent,
    MatNativeDateModule,
    DataAccessModule,
    HomeComponent,
    NgClass,
    MatSelectModule,
    NgForOf,
    FormsModule,
  ],
})
export class AppComponent {
  constructor() {}

  title = 'ways-test';
  currentTheme = '';
  themes = [
    {
      label: 'dark',
      value: 'dark-theme',
    },
    {
      label: 'blue-light',
      value: 'blue-light-theme',
    },
    {
      label: 'default',
      value: '',
    },
  ];
}
