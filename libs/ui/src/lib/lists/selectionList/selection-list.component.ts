import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'ways-test-selection-list',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.scss'],
})
export class SelectionListComponent {
  typesOfShoes: string[] = ['Field name 1', 'Field name 2', 'Field name 3'];
  @Input() color = 'primary';
}
