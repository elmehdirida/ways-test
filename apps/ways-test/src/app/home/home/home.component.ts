import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLetterComponent, UiModule } from '@ways-test/ui';

@Component({
  selector: 'ways-test-home',
  standalone: true,
  imports: [CommonModule,UiModule,CardLetterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
