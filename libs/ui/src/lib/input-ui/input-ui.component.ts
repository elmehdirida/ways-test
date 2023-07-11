import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'ways-test-input-ui',
  standalone: true,
  imports: [CommonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './input-ui.component.html',
  styleUrls: ['./input-ui.component.css'],
})
export class InputUiComponent {
  @Input() textHolder : string =''
}
