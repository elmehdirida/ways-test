import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {
  DateBlockComponent, DatepickerComponent,
  InputUiComponent,
  LinesComponent,
  SliderUiComponent,
  TextAreaComponent
} from "@ways-test/ui";
import {MatCardModule} from "@angular/material/card";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';
import { AddressDialogComponent } from './address-dialog/address-dialog.component';
import { DatepickerComponent } from '@ways-test/ui';


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
  footnote  = "Footnote (optional)";
  body = "";
  listAdresse : string[] =[
  ]
   listAdresseCopy = [...this.listAdresse];
   
  contactInfo : string[] =[
    "01.01.2023",
    "Max Mustermann"
  ]
  contactInfoCopy = [...this.contactInfo];

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
        this.listAdresse = result;
        this.listAdresseCopy = [...this.listAdresse];
      } else {
        console.log('AddressDialogComponent closed with no data.');
      }
    });
  }

  openContactDialog(): void {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      data: {
        contactInfo: this.contactInfoCopy
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== null && result !== undefined) {
        this.contactInfo = result;
        this.contactInfoCopy = [...result];
      } else {
        console.log('ContactDialogComponent closed with no modifications.');
      }
    });
  }

  changeMode(event: boolean) {
      this.preview=event
  }
}
