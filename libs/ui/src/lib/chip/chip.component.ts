import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'ways-test-chip',
  standalone: true,
  imports: [CommonModule, MatChipsModule],
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent {
  @Input() options = [''];
  @Input() color: ThemePalette = 'primary';
  @Input() optionColors = [{ bgColor: '', textColor: '' }];
  @Output() selectedValueEvent   = new EventEmitter<string>()
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

  selectedChips(value: string) {
    this.selectedValueEvent.emit(value)
  }
}
