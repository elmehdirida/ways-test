import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'ways-test-datepicker',
  standalone: true,
  imports: [CommonModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatNativeDateModule,
    ReactiveFormsModule],
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})

export class DatepickerComponent implements OnInit{
  @Input() defaultDate!: Date;
  @Input() date = this.defaultDate;
  @Output() newDate = new EventEmitter<Date>();
  dateform = new FormControl(this.defaultDate);


  OnDateChange(date: Date) {
    this.newDate.emit(date);
  }


  ngOnInit(): void {
    if (this.defaultDate) {
      this.dateform.setValue(this.defaultDate);
    }
  }


}
