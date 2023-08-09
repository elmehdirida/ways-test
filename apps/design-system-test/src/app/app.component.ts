import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
@Component({
  standalone: true,
  imports: [HomeComponent, RouterModule],
  selector: 'ways-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'design-system-test';
}
