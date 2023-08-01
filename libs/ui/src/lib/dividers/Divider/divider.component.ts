import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from "@angular/material/list";

@Component({
  selector: 'ways-test-divider',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css'],
})
export class DividerComponent {}
