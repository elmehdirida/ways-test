import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'ways-test-native-select',
  standalone: true,
  imports: [CommonModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './native-select.component.html',
  styleUrls: ['./native-select.component.css'],
})
export class NativeSelectComponent implements OnInit{
  @Input() defaultLabel!:string
  @Input() defaultEmptyValue! : string
  @Input() selectOptions! :string[]
  @Input() control = new FormControl
  @Output() selectEventOutput = new EventEmitter<string>();
  emitSelect() {
      this.selectEventOutput.emit(this.control.value)
  }

  ngOnInit(): void {
    if(this.selectOptions.length>0){
      this.control.setValue(this.selectOptions[0])
    }
  }
}
