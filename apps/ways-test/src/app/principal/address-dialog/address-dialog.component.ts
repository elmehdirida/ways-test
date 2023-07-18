import {Component, Inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {InputUiComponent} from "@ways-test/ui";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {forEach} from "@angular-devkit/schematics";

@Component({
  selector: 'ways-test-address-dialog',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, InputUiComponent, MatButtonModule, MatListModule],
  templateUrl: './address-dialog.component.html',
  styleUrls: ['./address-dialog.component.css'],
})
export class AddressDialogComponent implements OnInit{
  newList : string[]=[]
  ngOnInit(): void {
    this.newList = [...this.data.addressList];
  }
  constructor(public dialogRef : MatDialogRef<AddressDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { addressList: string[] }) {
  }


  onCloseDialog(): void {
    for (let j = 0; j < this.newList.length; j++) {
      if (this.newList[j].trim() === '') {
        this.deleteLine(j);
        j--;
      }
    }
    this.dialogRef.close(this.data.addressList);
  }

  deleteLine(i: number) {
    this.newList.splice(i, 1);
  }

  addAddresse(val: string, i: number) {
    for (let j = 0; j < this.newList.length; j++) {
      if (this.newList[j].trim() === '') {
        this.deleteLine(j);
      }
    }
    if (val === '') {
      this.deleteLine(i);
    } else {
      this.newList[i] = val;
    }
  }
  onApply() {
    for (let j = 0; j < this.newList.length; j++) {
      if (this.newList[j].trim() === '') {
        this.deleteLine(j);
        j--;
      }
    }
    this.dialogRef.close(this.newList)
  }

  addLine() {
    this.newList.push('')
  }
}
