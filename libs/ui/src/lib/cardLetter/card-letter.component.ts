import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {Letter} from "@ways-test/data-access";

@Component({
  selector: 'ways-test-card-letter',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './card-letter.component.html',
  styleUrls: ['./card-letter.component.css'],
})
export class CardLetterComponent {
  @Input() letter! : Letter
}
