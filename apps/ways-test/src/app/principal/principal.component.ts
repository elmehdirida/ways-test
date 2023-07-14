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
  preview : boolean=false;
  isReq = true;
  sender="Sender address";
  subject="Subject (optional)";
  footnote  = "Footnote (optional)";
  inputBody = "";
  inputSender : string = ""
  inputSubject : string =""
  inputFootNote : string = ""
  listAdresse : string[] =[
  ]
  listAdresseCopy = [...this.listAdresse];
  contactInfo : string[] =[
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


  setSenderAdd(event: string) {
    this.inputSender = event
  }

  setSubject(event: string) {
    this.inputSubject = event
  }

  setBody(event: string) {
    this.inputBody= event
  }

  setFootNote(event: string) {
    this.inputFootNote = event
  }
}
