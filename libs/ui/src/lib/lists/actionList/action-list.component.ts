import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'ways-test-action-list',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.scss'],
})
export class ActionListComponent {
  @Input() items!: string[];
  @Output() selectedValueClicked = new EventEmitter<[string,number]>();

  handleClickedItem(item: string, index: number) {
    this.selectedValueClicked.emit([item,index])
  }
}
