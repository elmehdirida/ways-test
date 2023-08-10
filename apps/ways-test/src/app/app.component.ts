import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { MatNativeDateModule } from '@angular/material/core';
import { DataAccessModule } from '@ways-test/data-access';
import { HomeComponent } from './home/home/home.component';
import { NgClass, NgForOf } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CardLetterComponent, TableComponent } from '@ways-test/ui';
import { ThemeChangeService } from '../assets/service/themeChangeService';

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
    CardLetterComponent,
    TableComponent,
  ],
})
export class AppComponent implements OnInit {
  constructor(private themeService: ThemeChangeService) {}

  title = 'ways-test';
  currentTheme = '';
  themes = [
    {
      label: 'default',
      value: '',
    },
    {
      label: 'dark',
      value: 'dark-theme',
    },
    {
      label: 'blue-light',
      value: 'blue-light-theme',
    },
    {
      label: 'green',
      value: 'my-green-theme',
    },
  ];

  setTheme(theme: string) {
    this.themeService.setTheme(theme);
  }

  ngOnInit(): void {
    this.currentTheme = this.themeService.getTheme();
  }
}
