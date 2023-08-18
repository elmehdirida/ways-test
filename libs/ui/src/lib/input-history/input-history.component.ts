import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatButtonModule} from "@angular/material/button";

export interface autoComplete {
  value: string;
  type: 'history' | 'suggestion' ;
}

@Component({
  selector: 'ways-test-input-history',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatIconModule, MatAutocompleteModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './input-history.component.html',
  styleUrls: ['./input-history.component.scss'],
})
export class InputHistoryComponent implements OnInit,OnChanges{
  @Input() placeHolder = '';
  @Input() value = '';
  @Input() type = 'search';
  @Input() required =false;
  @Input() disable =false;
  @Output() onChangeValue = new EventEmitter<string>();
  @Input() control = new FormControl();
  @Input() history: string[] = [
    'one',
    'two',
    'three',
    'four',
  ];
  @Input() suggestions: string[] = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',


  ];
  inputType = this.type;
  showPassword = false;
  options: autoComplete[] = [];

  ngOnInit(): void {
    console.log(this.value)
    if(!this.value){
      this.control.setValue("")
    }
    this.mergeListOfAutoComplete()
    if(this.disable){
      this.control.disable()
    }
    this.control.setValue(this.value);
    this.inputType = this.type;
  }

  mergeListOfAutoComplete(): void {
    this.options = [];
    this.history.forEach((value) => {
      if(this.options.length < 5) {
        if (value.includes(this.control.value)) {
          this.options.push({value: value, type: 'history'});
        }
      }
    });
    this.suggestions.forEach((value) => {
      if (this.options.length < 5) {
        if (value.includes(this.control.value) && !this.history.includes(value)) {
          this.options.push({value: value, type: 'suggestion'});
        }
      }
    });
  }
  onChange() {
    this.value = this.control.value;
    this.onChangeValue.emit(this.value);
    this.mergeListOfAutoComplete();
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

  deleteSelectedOption($event:Event, option: string) {
    $event.stopPropagation();
    this.history = this.history.filter((value) => value !== option);
    this.mergeListOfAutoComplete();
  }

  saveHistory() {
    if(!this.history.includes(this.control.value) && this.control.value !== ''){
        this.history.push(this.control.value)
        //push to history in the 1st position without duplicate and let the other elements in the same order
        this.history = this.history.filter((value) => value !== this.control.value);
        this.history.unshift(this.control.value);
        }
    this.mergeListOfAutoComplete();
  }
}
