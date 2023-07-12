import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';



@Component({
  selector: 'ways-test-datepicker',
  standalone: true,
  imports: [CommonModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatNativeDateModule,],
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
})
export class DatepickerComponent {}
