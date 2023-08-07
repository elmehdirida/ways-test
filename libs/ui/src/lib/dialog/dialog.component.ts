import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'ways-test-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  @Input() title!: string;
  @Input() content!: string;
  @Input() buttons!: any[];


  constructor(public dialogRef: MatDialogRef<DialogComponent>) {
    
   }
}
