import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatRippleModule, ThemePalette} from "@angular/material/core";

@Component({
  selector: 'ways-test-menu',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatButtonModule, MatIconModule, MatRippleModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() color:ThemePalette= 'primary';
  @Input() menuOptions = ['Menu Item 1', 'Menu Item 2'];

  handleClick(option: any, index: number) {
    console.log(option, index);
  }
}
