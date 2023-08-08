import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'ways-test-list',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatListModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() title!: string;
  @Input() content!: string;

  @Input() listInformations = [
    {
      title: '',
      content:
        '',
    },
  ];

  getTitleText(i: number) {
    return this.listInformations[i].title;
  }

  getContentText(i: number) {
    return this.listInformations[i].content;
  }
}
