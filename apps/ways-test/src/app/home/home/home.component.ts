import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLetterComponent, UiModule } from '@ways-test/ui';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { LetterService } from '@ways-test/data-access';


@Component({
  selector: 'ways-test-home',
  standalone: true,
  imports: [CommonModule,UiModule,CardLetterComponent,MatButtonModule,MatPaginatorModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

    cardComponents: CardLetterComponent[] = [];
    totalItems: number = 20;
    itemsPerPage: number = 15;
    pageSizeOptions: number[] = [5, 10, 15];
    displayedCardComponents: CardLetterComponent[] = [];
  
    constructor() {
      for (let i = 1; i <= this.totalItems; i++) {
        this.cardComponents.push({ id: i, title: `Card ${i}` });
      }
      this.displayedCardComponents = this.cardComponents.slice(0, this.itemsPerPage);
    }
  
    onPageChange(event: PageEvent) {
      const startIndex = event.pageIndex * event.pageSize;
      const endIndex = startIndex + event.pageSize;
  
      this.displayedCardComponents = this.cardComponents.slice(startIndex, endIndex);
    }

}
