import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ThemePalette } from '@angular/material/core';
@Component({
  selector: 'ways-test-selection-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.scss'],
})
export class SelectionListComponent {
  @Input() color: ThemePalette = 'primary';
  @Input() options = [''];

  @Input() optionColors = [
    { bgColor: '', textColor: '' },

  ];

  getBackgroundColor(i: number) {
    if (i < this.optionColors.length) {
      return this.optionColors[i].bgColor;
    } else {
      return '#fff'; 
    }
  }

  getTextColor(i: number) {
    if (i < this.optionColors.length) {
      return this.optionColors[i].textColor;
    } else {
    
    return '#000'; 
  }
}
}
