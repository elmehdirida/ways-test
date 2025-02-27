import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'ways-test-text-area',
  standalone: true,
  imports: [CommonModule ,MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
})
export class TextAreaComponent  implements OnInit{
  @Input() placeHolder: string = '';
  @Input() value : string=''
  @Input() type : string = 'text'
  @Input() required : boolean = false
  @Output() onChangeValue = new EventEmitter<string>()
  @Input() control  = new FormControl

  ngOnInit(): void {
    this.control.setValue(this.value);
  }
  onChange(){
    this.value = this.control.value;
    this.onChangeValue.emit(this.value);  }
}
