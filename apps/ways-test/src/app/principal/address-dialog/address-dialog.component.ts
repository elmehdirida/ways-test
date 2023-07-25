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
  newList : string[]=[]
  oldList : string []=[]
  newListCopy :string[]=[]
  ngOnInit(): void {
    if (this.data.addressList)
    {
      this.newList = [...this.data.addressList];
      this.oldList = [...this.newList]
      this.newListCopy = [...this.newList]

    }  }
  constructor(public dialogRef : MatDialogRef<AddressDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { addressList: string[] }) {
  }


  onCloseDialog(): void {
    this.dialogRef.close(this.oldList);
  }

  deleteLine(i: number) {
    this.newListCopy.splice(i, 1);
    this.newList = [...this.newListCopy]
  }

  addAddresse(val: string, i: number) {
    if (val === '' && this.newListCopy.length !== 0) {
      this.deleteLine(i);
    } else {
        this.newListCopy[i] = val
    }
    if(this.newListCopy.length==0){
      this.addLine()
    }
    this.newListCopy = this.newListCopy.filter(item => item.trim() !== '');

  }
  onApply() {
    this.newList = [...this.newListCopy]
    this.newList = this.newList.filter(item => item.trim() !== '');
    this.dialogRef.close(this.newList)
  }

  addLine() {
    this.newList.push("")
  }
}
