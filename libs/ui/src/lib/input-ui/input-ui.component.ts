import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ways-test-input-ui',
  standalone: true,
  imports: [CommonModule, MatInputModule, FormsModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './input-ui.component.html',
  styleUrls: ['./input-ui.component.scss'],
})
export class InputUiComponent implements OnInit,OnChanges {
  @Input() placeHolder = '';
  @Input() value = '';
  @Input() type = 'text';
  @Input() required =false;
  @Input() disable =false;
  @Output() onChangeValue = new EventEmitter<string>();
  @Input() control = new FormControl();
  inputType = this.type;
  showPassword = false;

  ngOnInit(): void {
    if(this.disable){
      this.control.disable()
    }
    this.control.setValue(this.value);
    this.inputType = this.type;
  }

  onChange() {
    this.value = this.control.value;
    this.onChangeValue.emit(this.value);
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
    this.inputType = this.showPassword ? 'text' : 'password';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["type"]) {
      this.inputType = this.type;
      if (this.type !== 'password') {
        this.showPassword = false;
      }
    }
    if (changes["disable"]) {
            if(this.disable){
              this.control.disable()
            }
            else {
              this.control.enable()
            }
      }
  }
}
