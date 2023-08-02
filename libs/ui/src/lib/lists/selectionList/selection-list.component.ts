import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ways-test-selection-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.scss'],
})
export class SelectionListComponent {

//   typesOfShoes: string[] = ['Field name 1', 'Field name 2', 'Field name 3'];
@Input() color = 'primary';

//   @Input() backgroundColors: string[] = ['#b5ffd2', '#FDF5CA', '#FFCDD6'];

// getBackgroundColor(index: number): string {
//   return this.backgroundColors[index] || 'transparent';
// }


@Input() typesOfShoes = [
  'verfügbar', 
  'reserviert',
  'nicht verfügbar',
  'Loafers'
];

@Input() shoeColors = [
  {bgColor: '#b5ffd2', textColor: '#00752E'},
  {bgColor: '#FDF5CA', textColor: '#B44100'},
  {bgColor: '#FFCDD6', textColor: '#B44100'},
  {bgColor: 'yellow', textColor: 'orange'}
];

getBackgroundColor(i: number) {
  return this.shoeColors[i].bgColor;
}

getTextColor(i: number) {
 return this.shoeColors[i].textColor; 
}
}

