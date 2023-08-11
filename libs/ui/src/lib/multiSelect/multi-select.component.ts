import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { InputUiComponent } from '../input-ui/input-ui.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'ways-test-multi-select',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    InputUiComponent,
    MatCheckboxModule,
  ],
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
})
export class MultiSelectComponent {
  // selectedValues: number[] = []; // Store the selected values
  // options = [
  //   { value: 1, label: 'One' },
  //   { value: 2, label: 'Two' },
  //   { value: 3, label: 'Three' },
  //   { value: 4, label: 'Four' },
  //   { value: 5, label: 'Five' },
  //   { value: 6, label: 'Six' },
  //   { value: 7, label: 'Seven' },
  //   { value: 8, label: 'Eight' },
  // ];

  selectedValues: number[] = [];
  options = [
    { value: 1, label: 'One' },
    { value: 2, label: 'Two' },
    { value: 3, label: 'Three' },
    { value: 4, label: 'Four' },
    { value: 5, label: 'Five' },
    { value: 6, label: 'Six' },
    { value: 7, label: 'Seven' },
    { value: 8, label: 'Eight' },
  ];
  selectAll = false;
  searchValue = '';

  get filteredOptions() {
    return this.options.filter((option) =>
      option.label.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }

  toggleAllSelection() {
    this.selectAll = !this.selectAll;
    if (this.selectAll) {
      this.selectedValues = this.filteredOptions.map((option) => option.value);
    } else {
      this.selectedValues = [];
    }
  }

  toggleOptionSelection(value: number) {
    const index = this.selectedValues.indexOf(value);
    if (index === -1) {
      this.selectedValues.push(value);
    } else {
      this.selectedValues.splice(index, 1);
    }
    this.selectAll = this.selectedValues.length === this.filteredOptions.length;
  }

  isSelected(value: number): boolean {
    return this.selectedValues.includes(value);
  }

  filterOptions() {
    this.selectedValues = [];
  }
}
