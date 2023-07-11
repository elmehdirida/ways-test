import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SlideToggleMosineComponent } from '../slide-toggle-mosine/slide-toggle-mosine.component';

@Component({
  selector: 'ways-test-main-mosine',
  standalone: true,
  imports: [CommonModule, MatCardModule,SlideToggleMosineComponent],
  templateUrl: './main-mosine.component.html',
  styleUrls: ['./main-mosine.component.css'],
})
export class MainMosineComponent { }
