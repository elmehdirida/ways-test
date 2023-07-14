import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'ways-test-text-area',
  standalone: true,
  imports: [CommonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
})
export class TextAreaComponent implements OnInit{
  @Input() body! : string
  @Input() isRequired : boolean = false
  @Output() newValue = new EventEmitter<string>()

  value = new FormControl(this.body);
  ngOnInit(): void {
    if (this.body) {
      this.value.setValue(this.body);
    }
    if(this.isRequired){
      this.value.setValidators(Validators.required)
    }
  }

  onChange(val : string){
    this.newValue.emit(val);
  }
}
