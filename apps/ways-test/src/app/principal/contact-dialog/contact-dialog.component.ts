import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import { DatepickerComponent, InputUiComponent } from '@ways-test/ui';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {  MatDialogModule,  MatDialogRef} from '@angular/material/dialog';
import { FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from "@angular/material/button";


@Component({
    selector: 'ways-test-contact-dialog',
    standalone: true,
    templateUrl: './contact-dialog.component.html',
    styleUrls: ['./contact-dialog.component.css'],
  imports: [CommonModule,
    InputUiComponent,
    MatCardModule,
    MatIconModule,
    MatDatepickerModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    DatepickerComponent,
    MatListModule, MatButtonModule]
})
export class ContactDialogComponent {
contactName = 'Contact Name';

constructor(public dialogRef : MatDialogRef<ContactDialogComponent>, public fb: FormBuilder) {
  }

save() {
  this.dialogRef.close();}

close() {
  this.dialogRef.close();
}






}
