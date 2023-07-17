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

import { CardLetterComponent } from "../../../../../libs/ui/src/lib/cardLetter/card-letter.component";

import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


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
        DatepickerComponent,
        CardLetterComponent,
        MatIconModule
    ]

})
export class PrincipalComponent  {
  preview : boolean=false;
  isReq = true;
  sender="Sender address";
  subject="Subject (optional)";
  footnote  = "Footnote (optional)";
  inputBody = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ";
  inputSender : string = "Company GmbH, Musterstraße 10, 12345 Musterstadt"
  inputSubject : string ="This is an example subject line"
  inputFootNote : string = "footNote"
  listAdresse : string[] =[
    "Test GmbH",
    "Wallstraße 8, Frankfurt",
    "GERMANY"
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
        this.listAdresse=result
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

  backToPreview() {

  }

  saveLetter() {
  }
}
