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
import {AddressDialogComponent} from "./address-dialog/address-dialog.component";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";

@Component({
  selector: 'ways-test-principal',
  standalone: true,
  imports: [
    CommonModule,
    SliderUiComponent,
    InputUiComponent,
    NgOptimizedImage,
    MatCardModule,
    TextAreaComponent,
    LinesComponent,
    DateBlockComponent
  ,MatDialogModule],
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent  implements OnInit{

  sender: string="Sender address";
  subject: string="Subject (optional)";
  footnote : string = "Footnote (optional)"
  body: string = "";
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

  ngOnInit(): void {
  }
}
