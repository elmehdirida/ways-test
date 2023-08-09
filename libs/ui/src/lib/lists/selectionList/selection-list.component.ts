import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ThemePalette } from '@angular/material/core';
import {
  MAT_COLOR_FORMATS,
  NgxMatColorPickerModule,
  NGX_MAT_COLOR_FORMATS,
} from '@angular-material-components/color-picker';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { InputUiComponent } from '../../input-ui/input-ui.component';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'ways-test-selection-list',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    NgxMatColorPickerModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    InputUiComponent,
    MatFormFieldModule,
  ],
  providers: [{ provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }],
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.scss'],
})
export class SelectionListComponent {
  @Input() color: ThemePalette = 'primary';
  @Input() options = [''];
  @Input() optionColors = [{ bgColor: '', textColor: '' }];
  @Output() newListOfItems = new EventEmitter();
  @Input() newBgColor: string = '';
  @Input() newTextColor: string = '';
  @Input() newOption: string = '';
  showForm = false;

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

  deleteItem(i: number) {
    this.options.splice(i, 1);
    this.optionColors.splice(i, 1);
    this.newListOfItems.emit(this.options);
    this.newListOfItems.emit(this.optionColors);
  }

  addNewItem(): void {
    if (this.newOption) {
      this.options.push(this.newOption);
    } else {
      this.options.push('Default');
    }

    if (this.newBgColor && this.newTextColor) {
      this.optionColors.push({
        bgColor: this.newBgColor,
        textColor: this.newTextColor,
      });
    } else {
      this.optionColors.push({
        bgColor: '#fff',
        textColor: '#000',
      });
    }

    this.newListOfItems.emit(this.options);
    this.newListOfItems.emit(this.optionColors);
    this.showForm = false;
  }
  HandleshowForm() {
    this.showForm = !this.showForm;
  }
}
