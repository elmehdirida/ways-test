import {Component, importProvidersFrom, OnInit} from '@angular/core';
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
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { FormService ,} from 'libs/data-access/src/lib/services/Form.service';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {applicationConfig} from "@storybook/angular";
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
    ReactiveFormsModule,

  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // Input
  placeHolder = 'text Input';
  value = '';
  type = 'text';
  isReq = true;

  formGroup = new FormGroup({
    inputTextValue: new FormControl(),
    inputPasswordValue: new FormControl(),
    inputSearchValue: new FormControl(),
    datePickerValue: new FormControl(),
    rangeDatePickerValue: new FormGroup({
      startDateControl: new FormControl(),
      endDateControl: new FormControl(),
    }),
    nativeSelectValue: new FormControl(),
    menuControl : new FormControl(),
    chipsControl : new FormControl()
  });
   constructor(private formService: FormService) {}

  ngOnInit() {
    this.radioSelectedOption = this.radioOptions[this.radioOptions.length -1]
  }
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

  options = ['verfügbar', 'reserviert', 'nicht verfügbar'];
  selectedCheckBoxOptions = Array(this.options.length).fill("")
  optionColors = [
    { bgColor: '#b5ffd2', textColor: '#00752E' },
    { bgColor: '#FDF5CA', textColor: '#B44100' },
    { bgColor: '#FFCDD6', textColor: '#B44100' },
  ];

  // ActionList
  items = ['Frauen', 'Mode', 'Geht doch!'];
  selectedAction =this.items[0]

  // NativeSelect
  defaultLabel = 'Saved Filter';
  defaultEmptyValue = 'Select a saved filter';
  selectOptions: string[] = [
    'Filter Name 1',
    'Filter Name 2',
    'Filter Name 3',
    'Filter Name 4',
  ];
  radioSelectedOption! : string
  radioOptions: string[] = [
    'option 1',
    'option 2',
    'option 3',
    'option 4',
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


  // ExpansionPanel
  content = ' this is the content ';

  // Radio
  disabled = false;
  color: ThemePalette = 'accent';
  labelPosition: 'before' | 'after' = 'before';

  // Checkbox
  checkBoxLabels: string[] = [
    'label 1',
    'label 2',
    'label 3',
  ];

  selectedCheckBox:string[] = Array(this.checkBoxLabels.length).fill("")
  checkboxLabelPosition: 'before' | 'after' = 'after';
  checkboxDisabled = false;
  checkboxColor: 'primary' | 'accent' | 'warn' = 'primary';

  // Button

  // RaisedButton
  onFormSubmit() {
    if (this.formGroup.valid) {
      const formValues = this.formGroup.value;
      console.log(this.listInformations)
      console.log(formValues);
      console.log(this.radioSelectedOption)
      console.log(this.selectedCheckBox.filter(value1 => value1!==''))
      console.log(this.selectedAction)
      console.log(this.optionColors)
      console.log(this.selectedCheckBoxOptions)
    } else {
      // Handle form validation errors
    }
  }

  // save form

  saveForm() {
    // const formValues = this.formGroup.value;
    // const form: Form = {
    //   id: 1,
    //   inputTextValue: formValues.inputTextValue,
    //   inputPasswordValue: formValues.inputPasswordValue,
    //   inputSearchValue: formValues.inputSearchValue,
    //   datePickerValue: formValues.datePickerValue,
    //   rangeDatePickerValue: formValues.rangeDatePickerValue,
    //   inputValue: formValues.inputValue,
    // };
    // this.formService.addForm(form).subscribe((data) => {
    //   console.log(data);
    // });
    //this.formService.addForm();
  }

  setRadioValue($event: string) {
    this.radioSelectedOption = $event
  }

  checkBoxAdd(value: string, i: number) {
      this.selectedCheckBox[i]=value
  }
  optionsAdd($event: string[]) {
      this.selectedCheckBoxOptions=$event
  }
}
