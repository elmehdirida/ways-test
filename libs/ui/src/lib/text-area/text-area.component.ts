import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'ways-test-text-area',
  standalone: true,
  imports: [CommonModule, MatInputModule],
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
})
export class TextAreaComponent {
  @Input() body : string='Body'
}
