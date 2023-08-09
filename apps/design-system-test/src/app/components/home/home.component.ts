import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  InputUiComponent,
  UiModule,
  DatepickerComponent,
  RangeDatePickerComponent,
  ListComponent,
  SelectionListComponent,
  ActionListComponent,
  NativeSelectComponent,
  MenuComponent,
  ChipComponent,
  DividerComponent,
  ExpansionPanelComponent,
  RadioComponent,
  CheckboxComponent,
  ButtonComponent,
  RaisedButtonComponent,
} from '@ways-test/ui';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'ways-test-home',
  standalone: true,
  imports: [
    CommonModule,
    UiModule,
    InputUiComponent,
    DatepickerComponent,
    RangeDatePickerComponent,
    ListComponent,
    SelectionListComponent,
    ActionListComponent,
    NativeSelectComponent,
    MenuComponent,
    ChipComponent,
    DividerComponent,
    ExpansionPanelComponent,
    RadioComponent,
    CheckboxComponent,
    ButtonComponent,
    RaisedButtonComponent,
    MatRadioModule,
    MatListModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // Input
  placeHolder = 'Test';
  value = '';
  type = 'text';
  required = false;
  control = new FormControl();

  // Datepicker

  // DateRangePicker

  // List
  listInformations = [
    {
      title: 'Saved export template 1',
      content:
        'Field name 1, Field name 2, Field name 3, Field name 4,Field name 5,Field name X',
    },
    {
      title: 'Saved export template 1',
      content:
        'Field name 1, Field name 2, Field name 3, Field name 4,Field name 5,Field name X',
    },
  ];

  // SelectionList

  options = ['verfügbar', 'reserviert', 'nicht verfügbar', ];

  optionColors = [
    { bgColor: '#b5ffd2', textColor: '#00752E' },
    { bgColor: '#FDF5CA', textColor: '#B44100' },
    { bgColor: '#FFCDD6', textColor: '#B44100' },
  ];

  // ActionList
  items = ['Frauen', 'Mode', 'Geht doch!'];

  // NativeSelect
  defaultLabel = 'Saved Filter';
  defaultEmptyValue = 'Select a saved filter';
  selectOptions: string[] = [
    'Filter Name 1',
    'Filter Name 2',
    'Filter Name 3',
    'Filter Name 4',
  ];

  // Menu
  menuOptions = ['Menu Item 1', 'Menu Item 2'];

  // Chip

  chipOptions = ['verfügbar', 'reserviert', 'nicht verfügbar'];

  chipOptionColors = [
    { bgColor: '#b5ffd2', textColor: '#00752E' },
    { bgColor: '#FDF5CA', textColor: '#B44100' },
    { bgColor: '#FFCDD6', textColor: '#B44100' },
  ];

  // Divider

  // ExpansionPanel
  elementsCount = 5;
  panelTitle = 'title';
  content = ' this is the content ';

  // Radio
  label = 'Radio';
  disabled = false;
  color: ThemePalette = 'accent';
  labelPosition: 'before' | 'after' = 'before';

  // Checkbox
  checkboxLabel = 'Label after';
  checked = false;
  indeterminate = true;
  checkboxLabelPosition: 'before' | 'after' = 'after';
  checkboxDisabled = false;
  checkboxColor: 'primary' | 'accent' | 'warn' = 'primary';

  // Button

  // RaisedButton
}
