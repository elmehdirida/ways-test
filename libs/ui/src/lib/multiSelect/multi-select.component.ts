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
  selectAll = true;
  searchValue = '';

  get filteredOptions() {
    return this.options.filter((option) =>
      option.label.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }

  toggleAllSelection() {
    if (this.selectAll) {
      console.log(this.filteredOptions)
      this.selectedValues = this.filteredOptions.map((option) => option.value);
      this.selectAll = !this.selectAll;
    } else {
      this.selectedValues = [];
      this.selectAll = !this.selectAll;
    }
  }

  filterOptions($event: string) {
    this.searchValue = $event;
    console.log(this.searchValue);
  }
}
