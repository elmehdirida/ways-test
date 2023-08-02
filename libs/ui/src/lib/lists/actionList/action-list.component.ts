import { Component, Input } from '@angular/core';
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

  handleClickedItem(item: any, index: number) {
    console.log('Item clicked, is located at the positon : ', item, index);
  }
}
