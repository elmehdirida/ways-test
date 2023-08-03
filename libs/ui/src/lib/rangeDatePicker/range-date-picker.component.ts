import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {MomentDateAdapter} from '@angular/material-moment-adapter';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD.MM.YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};


@Component({
  selector: 'ways-test-range-date-picker',
  standalone: true,
  providers :[DatePipe,
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},],
    imports: [CommonModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatNativeDateModule,
      ReactiveFormsModule ],
  templateUrl: './range-date-picker.component.html',
  styleUrls: ['./range-date-picker.component.css'],
})
export class RangeDatePickerComponent implements OnInit{


  constructor(private datePipe : DatePipe ) {
  }
  @Input() startDefaultDate!: string;
  @Input() endDefaultDate!: string;
  @Output() newStartDate = new EventEmitter<string | null>();
  @Output() newEndDate = new EventEmitter<string | null>();

  dateform = new FormGroup({
    startDateControl: new FormControl(new Date),
    endDateControl: new FormControl(new Date),
  });


  OnDateChange() {
    this.newStartDate.emit(this.datePipe.transform(this.dateform.controls.startDateControl.value, 'dd.MM.yyyy'))
    this.newEndDate.emit(this.datePipe.transform(this.dateform.controls.endDateControl.value, 'dd.MM.yyyy'))
  }

  parseDatePicker  (text: string): Date {
    const parts = text.split('.');
    if (parts.length === 3) {
      const day = parseInt(parts[0]);
      const month = parseInt(parts[1]) - 1;
      const year = parseInt(parts[2]);
      return new Date(year, month, day);
    }
    return new Date();
  };


  ngOnInit(): void {
    if(this.startDefaultDate){
      this.dateform.controls.startDateControl.setValue(this.parseDatePicker(this.startDefaultDate))
    }
    if(this.endDefaultDate){
      this.dateform.controls.endDateControl.setValue(this.parseDatePicker(this.endDefaultDate))
    }
  }
}
