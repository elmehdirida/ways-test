import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'ways-test-checkbox',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input() label = 'label';
  @Input() checked = true;
  @Input() indeterminate = false;
  @Input() labelPosition: 'before' | 'after' = 'after';
  @Input() disabled = false;
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Output() newStatus = new EventEmitter<string>();

  onCheck() {
    this.checked = !this.checked;
    if (this.checked) {
      this.newStatus.emit(this.label);
    } else {
      this.newStatus.emit('');
    }
  }
}
