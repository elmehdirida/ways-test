import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {
  ButtonComponent,
  DividerComponent,
  InputUiComponent,
  RaisedButtonComponent,
} from '@ways-test/ui';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatRippleModule} from "@angular/material/core";
import {Option} from "@ways-test/data-access";

@Component({
  selector: 'ways-test-multi-select',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    InputUiComponent,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    ButtonComponent,
    RaisedButtonComponent,
    DividerComponent,
    MatRippleModule,
  ],
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
})
export class MultiSelectComponent {
  selectedValues: number[] = [];
  @Input() options = [] as Option[];
  @Output() selectedOptions = new EventEmitter<Option[]>();
  showAddOption = true;
  searchValue = '';
  newValue = { value: this.options.length + 1, label: '' };

  get filteredOptions() {
    return this.options.filter((option) =>
      option.label.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }

  isAllSelected(): boolean {
    return (
      this.selectedValues.length === this.filteredOptions.length &&
      this.filteredOptions.length > 0
    );
  }

  isIndeterminate(): boolean {
    return (
      this.selectedValues.length > 0 &&
      this.selectedValues.length < this.filteredOptions.length
    );
  }

  toggleAllSelection() {
    if (this.isAllSelected()) {
      this.selectedValues = [];
    } else {
      this.selectedValues = this.filteredOptions.map((option) => option.value);
    }
    this.emitNewOptions();
  }

  filterOptions($event: string) {
    this.searchValue = $event;
  }

  deleteSelectedOption(
    $event: Event,
    option: { value: number; label: string }
  ) {
    $event.stopPropagation();
    if (this.options.length > 0) {
      this.options = this.options.filter((item) => item.value !== option.value);
      this.selectedValues = this.selectedValues.filter(
        (item) => item !== option.value
      );
      this.emitNewOptions();
    }
  }

  clearAll($event: Event) {
    $event.stopPropagation();
    if (this.selectedValues.length > 0) {
      this.options = [
        ...this.options.filter(
          (item) => !this.selectedValues.includes(item.value)
        ),
      ];
      this.selectedValues = [];
    }
    this.emitNewOptions();
  }

  addOption($event: string) {
    if ($event) {
      this.newValue = { value: this.options.length + 1, label: $event };
    }
  }
  saveOption() {
    if (this.newValue.label !== '') {
      this.options = [...this.options, this.newValue];
      this.newValue = { value: this.options.length + 1, label: '' };
      this.showAddOption = !this.showAddOption;
    }
  }

  emitNewOptions() {
    this.selectedOptions.emit(
      this.options.filter((option) =>
        this.selectedValues.includes(option.value)
      )
    );
  }
}
