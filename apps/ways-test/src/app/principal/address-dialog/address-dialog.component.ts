import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogRef} from "@angular/material/dialog";
import {InputUiComponent} from "@ways-test/ui";

@Component({
  selector: 'ways-test-address-dialog',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, InputUiComponent],
  templateUrl: './address-dialog.component.html',
  styleUrls: ['./address-dialog.component.css'],
})
export class AddressDialogComponent {
   line : string = "line "
  constructor(public dialogRef : MatDialogRef<AddressDialogComponent>) {
  }


  onCloseDialog() : void {
    this.dialogRef.close();
  }
}
