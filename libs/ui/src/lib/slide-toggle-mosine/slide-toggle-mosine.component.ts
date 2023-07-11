import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'ways-test-slide-toggle-mosine',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule],
  templateUrl: './slide-toggle-mosine.component.html',
  styleUrls: ['./slide-toggle-mosine.component.css'],
})
export class SlideToggleMosineComponent { }
