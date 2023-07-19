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
import {Router, RouterLink} from "@angular/router";
import {DataSharingService, Letter, LetterService} from "@ways-test/data-access";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


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
    RouterLink,
    MatSnackBarModule
  ]
})
export class PrincipalComponent implements OnInit{
  preview : boolean=false;
  isReq = true;
  sender="Sender address";
  subject="Subject (optional)";
  footnote  = "Footnote (optional)";
  letterForm!: FormGroup;
  letter! : Letter
  contactInfoCopy! :string[];
  AddressReceiverCopy! : string[]

  constructor(public dialog :MatDialog , private  data : DataSharingService,private letterService : LetterService,
     private router : Router, private fb : FormBuilder,private snackBar : MatSnackBar) {
  
  }

  

  ngOnInit(): void {
    this.letter = this.data.getLetterData()
    if (this.letter === undefined) {
      this.letter = {
        senderAddress: "",
        receiverAddress: [],
        subject: "",
        body: "",
        contact: [],
        footNote: "",
        id: 0
      }
      this.contactInfoCopy= []
    }
    else{
      this.AddressReceiverCopy = [...this.letter.receiverAddress]
      this.contactInfoCopy =[...this.letter.contact]
    }


    this.letterForm = this.fb.group({
      senderAddress: ["", Validators.required],
      body : ["", Validators.required],
    })

  }


  openDialog(): void {
    const dialogRef = this.dialog.open(AddressDialogComponent, {
      data: {
        addressList: this.AddressReceiverCopy
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.letter.receiverAddress=this.AddressReceiverCopy=result
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
        this.letter.contact = result;
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
    if (!this.letter.senderAddress) {
      this.snackBar.open('Please enter the sender address', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
        panelClass: 'snackbar-error'
      });
      return;
    }
  
    if (!this.letter.body) {
      this.snackBar.open('Please enter the body of the letter', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
        panelClass: 'snackbar-error'
      });
      return;
    }
    if (this.letter) {
      if (this.letter.id) {
        this.letterService.updateletter(this.letter).subscribe(
          updatedLetter => {
            alert('Letter updated :' + updatedLetter.id);
            this.router.navigateByUrl("");

            console.log('Letter updated:', updatedLetter);
          },
          error => {
            console.error('Error updating letter:', error);
          }
        );
      } else {
        this.letterService.addletter(this.letter).subscribe(
          addedLetter => {
            alert('Letter added:' + addedLetter.id);
            this.router.navigateByUrl("");
          },
          error => {
            console.error('Error adding letter:', error);
          }
        );
      }
    }
    else{
      alert("Please fill the sender address")
    }
  }

  deleteData(){
    this.data.deleteLetterData()
  }


}