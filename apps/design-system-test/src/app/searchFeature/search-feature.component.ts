import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent, SearchComponentComponent } from '@ways-test/ui';

@Component({
  selector: 'ways-test-search-feature',
  standalone: true,
  imports: [CommonModule, TableComponent, SearchComponentComponent],
  templateUrl: './search-feature.component.html',
  styleUrls: ['./search-feature.component.scss'],
})
export class SearchFeatureComponent {
  historyIn: string[] = ['history1', 'history2', 'history3'];
  suggestionsIn: string[] = ['suggestion1', 'suggestion2', 'suggestion3'];
}
