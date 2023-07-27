import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { MatNativeDateModule } from '@angular/material/core';
import { DataAccessModule, LetterService } from '@ways-test/data-access';
import { HomeComponent } from './home/home/home.component';
import {NgClass, NgForOf} from "@angular/common";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {CardLetterComponent} from "@ways-test/ui";
import {ThemeChangeService} from "../assets/service/themeChangeService";

@Component({
    standalone: true,
    selector: 'ways-test-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
  imports: [RouterModule, PrincipalComponent, MatNativeDateModule, DataAccessModule, HomeComponent, NgClass, MatSelectModule, NgForOf, FormsModule, CardLetterComponent]
})
export class AppComponent implements OnInit{
  @Output() mainTheme = new EventEmitter<string>();
  constructor(private themeService : ThemeChangeService) {}

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

  ]


  setTheme(newtheme: any) {
    this.themeService.setTheme(newtheme)
    this.mainTheme.emit(newtheme)
  }

  ngOnInit(): void {
    this.currentTheme = this.themeService.getTheme()
  }
}
