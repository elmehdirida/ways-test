import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ways-test-search-component',
  standalone: true,
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss'],
})
export class SearchComponentComponent implements OnInit {
  searchQuery = '';
  showHistoryOnLoad = false;

  ngOnInit(): void {
    this.showHistoryOnLoad = this.isFirstVisit();
  }

  @Input() history: string[] = [];
  @Input() suggestions: string[] = [];

  @Input() placeholder = 'Search';

  isFirstVisit(): boolean {
    const visitedKey = 'visited';
    const visitedValue = localStorage.getItem(visitedKey);

    if (visitedValue === null) {
      localStorage.setItem(visitedKey, 'true');
      console.log('first visit');
      return true;
    } else {
      console.log('Welcome again');
      return false;
    }
  }

  addToHistory(inputValue: string) {
    if (
      inputValue &&
      //!this.suggestions.includes(normalizedInput.toLowerCase())
      !this.history.some(
        (item) => item.toLowerCase() === inputValue.toLowerCase()
      )
    ) {
      this.history.unshift(inputValue);
    }
  }

  onInput(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    const normalizedInput = inputValue.trim();
    if (
      normalizedInput &&
      !this.history.some(
        (item) => item.toLowerCase() === normalizedInput.toLowerCase()
      )
    ) {
      this.addToHistory(normalizedInput);
    }
  }

  onInputValue(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.searchQuery = inputValue;
  }

  get combinedSuggestionsAndHistory(): string[] {
    return [...this.suggestions, ...this.history];
  }

  get filteredDuplicatedValuesFromHistory(): string[] {
    const lowerCaseHistory = this.history.map((item) => item.toLowerCase());
    return this.suggestions.filter(
      (item) => !lowerCaseHistory.includes(item.toLowerCase())
    );
  }

  get filteredHistory(): string[] {
    const lowerCaseSearchQuery = this.searchQuery.toLowerCase();

    return this.history.filter((item) =>
      item.toLowerCase().includes(lowerCaseSearchQuery)
    );
  }

  get filteredSuggestions(): string[] {
    const lowerCaseSearchQuery = this.searchQuery.toLowerCase();
    return this.suggestions.filter(
      (item) =>
        item.toLowerCase().includes(lowerCaseSearchQuery) &&
        !this.history.includes(item)
    );
  }

  deleteHistoryItem(event: Event, index: number) {
    event.stopPropagation();
    this.history.splice(index, 1);
  }
}
