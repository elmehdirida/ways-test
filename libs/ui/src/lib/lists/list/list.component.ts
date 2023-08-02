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
      title: 'Saved export template 1',
      content:
        'Field name 1, Field name 2, Field name 3, Field name 4,Field name 5,Field name X',
    },
    {
      title: 'Saved export template 2',
      content:
        'Field name 2, Field name 2, Field name 3, Field name 4,Field name 5,Field name X',
    },
    {
      title: 'Saved export template 3',
      content:
        'Field name 3, Field name 2, Field name 3, Field name 4,Field name 5,Field name X',
    },
    {
      title: 'Saved export template 4',
      content:
        'Field name 4, Field name 2, Field name 3, Field name 4,Field name 5,Field name X',
    },
  ];

  getTitleText(i: number) {
    return this.listInformations[i].title;
  }

  getContentText(i: number) {
    return this.listInformations[i].content;
  }
}
