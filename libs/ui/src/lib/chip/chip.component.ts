import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { ThemePalette } from '@angular/material/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'ways-test-chip',
  standalone: true,
  imports: [CommonModule, MatChipsModule, ReactiveFormsModule],
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent implements OnInit{
  @Input() options = [''];
  @Input() color: ThemePalette = 'primary';
  @Input() optionColors = [{ bgColor: '', textColor: '' }];
  @Input() control = new FormControl()
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

  ngOnInit(): void {
  }
}
