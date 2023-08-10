import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatRippleModule, ThemePalette} from "@angular/material/core";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'ways-test-menu',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatButtonModule, MatIconModule, MatRippleModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit{
  @Input() color:ThemePalette='primary';
  @Input() menuOptions!:string[]
  @Input() control = new FormControl()

  handleClick(option: string) {
      this.control.setValue(option)
  }

  ngOnInit(): void {
    if(this.menuOptions.length>0){
      this.control.setValue(this.menuOptions[0])

    }
  }
}
