import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLetterComponent, UiModule } from '@ways-test/ui';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import {DataSharingService, Letter, LetterService} from '@ways-test/data-access';
import {RouterLink} from "@angular/router";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'ways-test-home',
  standalone: true,
  imports: [CommonModule, UiModule, CardLetterComponent, MatButtonModule, RouterLink, MatPaginatorModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{

    letters: Letter[] = [];
    cardComponents: CardLetterComponent[] = [];
    totalItems: number = 0;
    itemsPerPage: number = 15;
    pageSizeOptions: number[] = [5, 10, 15];
    displayedCardComponents: CardLetterComponent[] = [];

  ngOnInit(): void {
    this.letterService.getLetters().subscribe(value => {
      this.letters = value;
      this.totalItems = this.letters.length;
      for (let i = 1; i <= this.letters.length; i++) {
        this.cardComponents.push({ letter: this.letters[i - 1] });
      }
      this.displayedCardComponents = this.cardComponents.slice(0, this.itemsPerPage);
    });



  }


    constructor(private letterService : LetterService) {
    }

    onPageChange(event: PageEvent) {
      const startIndex = event.pageIndex * event.pageSize;
      const endIndex = startIndex + event.pageSize;
      this.displayedCardComponents = this.cardComponents.slice(startIndex, endIndex);
    }
}
