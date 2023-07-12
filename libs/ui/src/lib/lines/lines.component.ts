import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ways-test-lines',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.css'],
})
export class LinesComponent {
  @Input() addresses! : string [];

}
