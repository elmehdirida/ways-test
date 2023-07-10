import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatRadioModule} from "@angular/material/radio";

@Component({
  selector: 'ways-test-slider-ui',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule, MatRadioModule],
  templateUrl: './slider-ui.component.html',
  styleUrls: ['./slider-ui.component.css'],
})
export class SliderUiComponent {
}
