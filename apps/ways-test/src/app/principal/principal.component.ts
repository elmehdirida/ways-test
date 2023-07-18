import {Component, OnInit} from '@angular/core';
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
import { CardLetterComponent } from "@ways-test/ui";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {DataSharingService, Letter} from "@ways-test/data-access";


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
    MatIconModule,
    MatButtonModule,
    RouterLink
  ]
})
export class PrincipalComponent implements OnInit{
  preview : boolean=false;
  isReq = true;
  sender="Sender address";
  subject="Subject (optional)";
  footnote  = "Footnote (optional)";

  constructor(public dialog :MatDialog , private  data : DataSharingService) {
  }
  letter! : Letter
  ngOnInit(): void {
    this.letter = this.data.getLetterData()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddressDialogComponent, {
      data: {
        addressList: this.letter.receiverAddress
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.letter.receiverAddress=result
      } else {
        console.log('AddressDialogComponent closed with no data.');
      }
    });
  }

  openContactDialog(): void {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      data: {
        contactInfo: this.letter.contact
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== null && result !== undefined) {
        this.letter.contact = result;
        this.letter.contact = [...result];
      } else {
        console.log('ContactDialogComponent closed with no modifications.');
      }
    });
  }


  changeMode(event: boolean) {
    this.preview=event
}


  setSenderAdd(event: string) {
    this.letter.senderAddress = event
  }

  setSubject(event: string) {
    this.letter.subject = event
  }

  setBody(event: string) {
    this.letter.body= event
  }

  setFootNote(event: string) {
    this.letter.footNote = event
  }

  saveLetter() {
  }
}
