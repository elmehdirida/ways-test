import {Component, Inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {InputUiComponent} from "@ways-test/ui";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";

@Component({
  selector: 'ways-test-address-dialog',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, InputUiComponent, MatButtonModule, MatListModule],
  templateUrl: './address-dialog.component.html',
  styleUrls: ['./address-dialog.component.css'],
})
export class AddressDialogComponent implements OnInit{
   line : string = "line "
  newList : string[]=[]
  ngOnInit(): void {
     this.newList = this.data.addressList
  }
  constructor(public dialogRef : MatDialogRef<AddressDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { addressList: string[] }) {
  }


  onCloseDialog(): void {
    this.dialogRef.close();
  }

  deleteLine(i: number) {
    this.data.addressList.splice(i, 1);
  }

  addAddresse(val: string, i: number) {
     if(val == ''){
       this.deleteLine(i)
     }
     else
     {
       this.newList[i] = val;
     }
  }

  onApply() {
      this.newList=this.newList.filter(value => value.trim() !== '')
      this.dialogRef.close(this.newList)
  }

  addLine() {
    this.newList.push('')
  }
}
