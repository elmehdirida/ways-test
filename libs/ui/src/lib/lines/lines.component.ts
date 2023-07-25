import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ways-test-lines',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss'],
})
export class LinesComponent implements OnInit{
  @Input() addresses! : string [];

  ngOnInit(): void {
  }

}
