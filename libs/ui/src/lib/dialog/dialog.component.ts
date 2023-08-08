import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {DatepickerComponent} from "../Datepicker/datepicker.component";
import {CardComponent} from "../card/card.component";

@Component({
  selector: 'ways-test-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, CardComponent],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit{
  @Input() title!: string
  @Input() content!: string
  @Input() subtitle!: string
  @Input() imgSrc! : string
  @Input() avatarSrc! : string
  ngOnInit() {
    this.openDialog()
  }

  constructor(public dialog: MatDialog) {
   }

  openDialog(): void {
    const dialogRef = this.dialog.open(CardComponent, {
      data: {
        title: this.title,
        content: this.content,
        subtitle: this.subtitle,
        imgSrc: this.imgSrc,
        avatarSrc: this.avatarSrc,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
