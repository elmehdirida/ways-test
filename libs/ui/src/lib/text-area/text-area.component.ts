import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'ways-test-text-area',
  standalone: true,
  imports: [CommonModule, MatInputModule, FormsModule],
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
})
export class TextAreaComponent {
  @Input() placeHolder: string = '';
  @Input() value : string=''
  @Input() type : string = 'text'
  @Input() required : boolean = false
  @Output() onChangeValue = new EventEmitter<string>()

  onChange(){
    this.onChangeValue.emit(this.value);
  }
}
