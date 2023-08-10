import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {DataAccessModule} from "@ways-test/data-access";
@Component({
  standalone: true,
  imports: [HomeComponent, RouterModule ,DataAccessModule],
  selector: 'ways-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'design-system-test';
}
