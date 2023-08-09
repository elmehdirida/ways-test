import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'ways-test-list',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatListModule, MatButtonModule, MatInputModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  newItemTitle: string = '';
  newItemContent: string = '';
  showInput =false
  @Input() listInformations: Array<any> = [];

  @Output() newListOfItems = new EventEmitter()

  deleteItem(i: number) {
    this.listInformations.splice(i,1)
    this.newListOfItems.emit(this.listInformations)
  }

  addNewItem(): void {
    if (this.newItemTitle && this.newItemContent) {
      this.listInformations.push({
        title: this.newItemTitle,
        content: this.newItemContent,
      });
      this.newItemTitle = '';
      this.newItemContent = '';
    }
    this.showInput = false
    this.newListOfItems.emit(this.listInformations)

  }

  showInputs() {
    this.showInput=!this.showInput
  }
}
