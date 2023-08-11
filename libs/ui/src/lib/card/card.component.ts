import {Component,Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {ButtonComponent} from "../buttons/button/button.component";

@Component({
  selector: 'ways-test-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, ButtonComponent, NgOptimizedImage],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {

  @Input()  title! :string
  @Input()  avatarSrc ! :string
  @Input()  imgSrc! :string
  @Input()  subtitle!:string
  @Input()  content! :string



}
