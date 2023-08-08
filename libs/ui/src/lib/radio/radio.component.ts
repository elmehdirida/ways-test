import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'ways-test-radio',
  standalone: true,
  imports: [CommonModule, MatRadioModule],
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent {
  @Input() label!: string;
  @Input() disabled = false;
  @Input() color: ThemePalette = 'primary';
  @Input() labelPosition: 'before' | 'after' = 'after';
  @Output() newStatus  = new EventEmitter<boolean>()

  onCheck (){
    console.log(true)
    this.newStatus.emit(true)
  }
}
