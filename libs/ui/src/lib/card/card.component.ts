import {Component, Inject, Input, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {ButtonComponent} from "../buttons/button/button.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'ways-test-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, ButtonComponent, NgOptimizedImage],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit{

  @Input()  title! :string
  @Input()  avatarSrc ! :string
  @Input()  imgSrc! :string
  @Input()  subtitle!:string
  @Input()  content! :string

  constructor(@Inject(MAT_DIALOG_DATA) public  data : any) {
  }

  ngOnInit() {
    console.log(this.data)
    if(this.data.title){
      this.title = this.data.title
    }
    if(this.data.content){
      this.content = this.data.content
    }
    if(this.data.avatarSrc){
      this.avatarSrc = this.data.avatarSrc
    }
    if(this.data.subtitle){
      this.subtitle = this.data.subtitle
    }
    if(this.data.imgSrc){
      this.imgSrc = this.data.imgSrc
    }
  }
}
