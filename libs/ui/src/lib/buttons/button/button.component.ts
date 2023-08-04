import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { ThemePalette } from '@angular/material/core';


@Component({
  selector: 'ways-test-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatBadgeModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() icon!: string;
  @Input() color:ThemePalette= 'primary';
  @Input() disabled = false;
  @Input() type : 'button' | 'submit' | 'reset' = 'button';
  @Input() badge  = 0;

 
}
