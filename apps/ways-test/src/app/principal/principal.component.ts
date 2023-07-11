import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {InputUiComponent, SliderUiComponent, TextAreaComponent} from "@ways-test/ui";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'ways-test-principal',
  standalone: true,
  imports: [CommonModule, SliderUiComponent, InputUiComponent, NgOptimizedImage, MatCardModule, TextAreaComponent],
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent {
  sender: string="Sender address";
}
