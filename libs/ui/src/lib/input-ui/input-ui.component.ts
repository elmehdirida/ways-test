import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'ways-test-input-ui',
  standalone: true,
  imports: [CommonModule, MatInputModule, FormsModule],
  templateUrl: './input-ui.component.html',
  styleUrls: ['./input-ui.component.css'],
})
export class InputUiComponent{
  @Input() placeHolder  =''
  @Input() value =''
  @Input() type : string = 'text'
  @Input() required : boolean = false
  @Output() onChangeValue = new EventEmitter<string>();

  onChange(){
    console.log(this.value )
    this.onChangeValue.emit(this.value);
  }

}
