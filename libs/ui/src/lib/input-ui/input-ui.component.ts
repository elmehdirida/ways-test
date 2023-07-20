import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'ways-test-input-ui',
  standalone: true,
  imports: [CommonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './input-ui.component.html',
  styleUrls: ['./input-ui.component.css'],
})
export class InputUiComponent implements OnInit{
  @Input() textHolder  =''
  @Input() initialValue =''
  @Input() isRequired : boolean = false
  @Output() newValue = new EventEmitter<string>();
  
  value = new FormControl(this.initialValue );

  onChange(val : string){
    this.newValue.emit(val);
  }

  ngOnInit(): void {
    if (this.initialValue) {
      this.value.setValue(this.initialValue);
    }
    if(this.isRequired){
      this.value.setValidators(Validators.required)
    }
  }
}
