import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import { DatepickerComponent, InputUiComponent } from '@ways-test/ui';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {  MAT_DIALOG_DATA, MatDialogModule,  MatDialogRef} from '@angular/material/dialog';
import { FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';


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
        MatListModule,
        MatButtonModule]
})
export class ContactDialogComponent implements OnInit{
contactName = 'Contact Name';
contactListInit: string[] = [];
contactListCopy = [...this.contactListInit];
formattedDateInit! : string;
dateString : any
unsavedChanges = false;
updatedContactList: string[] = [];


ngOnInit(): void {
    this.contactListCopy = this.data.contactInfo
    this.updatedContactList= this.data.contactInfo
  }

constructor(public dialogRef : MatDialogRef<ContactDialogComponent> 
  ,@Inject(MAT_DIALOG_DATA) public data: { contactInfo: string[] }) {
  }
 


  save() {
    if (this.unsavedChanges) {
      this.contactListCopy = [...this.updatedContactList];
      this.dialogRef.close(this.contactListCopy);
    } else {
      this.dialogRef.close();
    }
  }
  

close() {
  this.dialogRef.close();
}

handleContactNameChange(event: any) {
  this.updatedContactList[1] = event;
  this.unsavedChanges = true;
}

handleDateChange(event: any) {
  const dateObject = new Date(event);
  if (!isNaN(dateObject.getTime())) {
    const formattedDate = `${dateObject.getMonth() + 1}.${dateObject.getDate()}.${dateObject.getFullYear()}`;
    this.updatedContactList[0] = formattedDate;
    this.unsavedChanges = true;
  }
}



}

