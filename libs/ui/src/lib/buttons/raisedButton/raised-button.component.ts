import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'ways-test-raised-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatBadgeModule],
  templateUrl: './raised-button.component.html',
  styleUrls: ['./raised-button.component.scss'],
})
export class RaisedButtonComponent {
  @Input() label!: string;
  @Input() icon!: string;
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
}
