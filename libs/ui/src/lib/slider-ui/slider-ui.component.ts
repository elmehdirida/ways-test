import {Component, EventEmitter, Input, Output} from '@angular/core';
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
  @Input() enable : boolean=false;
  @Output() newP = new EventEmitter<boolean>();

  changeMode() {
    this.newP.emit(!this.enable)
  }
}

