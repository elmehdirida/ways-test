import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ways-test-date-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-block.component.html',
  styleUrls: ['./date-block.component.scss'],
})
export class DateBlockComponent {
  @Input() contact! : string [];

}
