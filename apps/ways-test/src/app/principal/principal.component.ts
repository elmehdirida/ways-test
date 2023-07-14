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
  preview =false;
  sender="Sender address";
  subject="Subject (optional)";
  footnote  = "Footnote (optional)";
  body = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.";
  listAdresse : string[] =[
    "Test GmbH", "Wallstraße 8, Frankfurt", "GERMANY"
  ]
  inputAddress  = 'Company GmbH. Musterstraße 10, 12345 Musterstadt'
  inputSubject  ="This is an example subject line"
   listAdresseCopy = [...this.listAdresse];

  contactInfo : string[] =[]

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
        contactInfo: this.contactInfoCopy,
        defaultDate: this.contactInfoCopy[0]

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
