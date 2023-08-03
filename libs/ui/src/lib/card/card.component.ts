import {Component, Input} from '@angular/core';
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

  @Input()  title = "Card title"
  @Input()  src ="/logo.png"
  @Input()  Imgsrc ="/logo.png"
  @Input()  subtitle = "sub text"
  @Input()  content ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."

}
