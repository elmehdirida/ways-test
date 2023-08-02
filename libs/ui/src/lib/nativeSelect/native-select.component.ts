import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'ways-test-native-select',
  standalone: true,
  imports: [CommonModule, MatInputModule, FormsModule],
  templateUrl: './native-select.component.html',
  styleUrls: ['./native-select.component.css'],
})
export class NativeSelectComponent {
  @Input() defaultLabel ='Saved Filter'
  @Input() defaultEmptyValue ='Select a saved filter'
  @Input() selectOptions :string[] =["Filter Name 1","Filter Name 2","Filter Name 3","Filter Name 4"]
  @Output() selectEventOutput = new EventEmitter<string>();
  selectedValue =''

  emitSelect() {
    this.selectEventOutput.emit(this.selectedValue)
  }
}
