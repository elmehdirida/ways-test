import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {
  DateBlockComponent,
  InputUiComponent,
  LinesComponent,
  SliderUiComponent,
  TextAreaComponent
} from "@ways-test/ui";
import {MatCardModule} from "@angular/material/card";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';
import { AddressDialogComponent } from './address-dialog/address-dialog.component';
import { DatepickerComponent } from "../../../../../libs/ui/src/lib/Datepicker/datepicker.component";


@Component({
    selector: 'ways-test-principal',
    standalone: true,
    templateUrl: './principal.component.html',
    styleUrls: ['./principal.component.css'],
    imports: [
        CommonModule,
        SliderUiComponent,
        InputUiComponent,
        NgOptimizedImage,
        MatCardModule,
        TextAreaComponent,
        LinesComponent,
        DateBlockComponent,
        MatDialogModule,
        DatepickerComponent
    ]
})
export class PrincipalComponent  {

  sender="Sender address";
  subject="Subject (optional)";
  footnote  = "Footnote (optional)"
  body = "";
  listAdresse : string[] =[
    "test",'test2'
  ]
   listAdresseCopy = [...this.listAdresse];
  contactInfo : any[] =[
    "01.01.2023",
    "Max Mustermann"
  ]

  constructor(public dialog :MatDialog) {
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(AddressDialogComponent, {
      data: {
        addressList: this.listAdresseCopy
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log(result)
        this.listAdresse = result;
      } else {
        console.log('AddressDialogComponent closed with no data.');
      }
    });
  }

  openContactDialog(): void {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      data: {
        contactInfo: this.contactInfo
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log(result)
        this.contactInfo = result;
      } else {
        console.log('ContactDialogComponent closed with no data.');
      }
    });
  }

}
