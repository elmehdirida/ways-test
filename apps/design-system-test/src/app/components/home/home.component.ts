import { Component, OnInit } from '@angular/core';
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
  MultiSelectComponent,
} from '@ways-test/ui';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { FormService } from 'libs/data-access/src/lib/services/Form.service';
import { Form, Option } from 'libs/data-access/src/lib/models/Form.model';
import { Router } from '@angular/router';

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
    MultiSelectComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private formService: FormService, private router: Router) {}

  // Input
  placeHolder = 'text Input';
  value = '';
  type = 'text';
  isReq = true;
  form!: Form;
  option!: Option;
  data!: Form;

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
    menuControl: new FormControl(),
    chipsControl: new FormControl(),
  });

  ngOnInit() {
    this.radioSelectedOption = this.radioOptions[this.radioOptions.length - 1];
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
  selectedCheckBoxOptions: string[] = Array(this.options.length).fill('');
  optionColors = [
    { bgColor: '#b5ffd2', textColor: '#00752E' },
    { bgColor: '#FDF5CA', textColor: '#B44100' },
    { bgColor: '#FFCDD6', textColor: '#B44100' },
  ];

  // ActionList
  items = ['Frauen', 'Mode', 'Geht doch!'];
  selectedAction = this.items[0];

  // NativeSelect
  defaultLabel = 'Saved Filter';
  defaultEmptyValue = 'Select a saved filter';
  selectOptions: string[] = [
    'Filter Name 1',
    'Filter Name 2',
    'Filter Name 3',
    'Filter Name 4',
  ];
  radioSelectedOption!: string;
  radioOptions: string[] = ['option 1', 'option 2', 'option 3', 'option 4'];

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
  checkBoxLabels: string[] = ['label 1', 'label 2', 'label 3'];

  selectedCheckBox: string[] = Array(this.checkBoxLabels.length).fill('');
  checkboxLabelPosition: 'before' | 'after' = 'after';
  checkboxDisabled = false;
  checkboxColor: 'primary' | 'accent' | 'warn' = 'primary';

  // Button

  // MultiSelect

  multiSelectOptions = [
    { value: 1, label: 'One' },
    { value: 2, label: 'Two' },
    { value: 3, label: 'Three' },
    { value: 4, label: 'Four' },
    { value: 5, label: 'Five' },
    { value: 6, label: 'Six' },
    { value: 7, label: 'Seven' },
    { value: 8, label: 'Eight' },
  ];
  selectedMultiSelectOptions: Option[]= []

  // RaisedButton
  onFormSubmit() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.valid) {
      this.form = {
        textInput: this.formGroup.get('inputTextValue')?.value,
        passwordInput: this.formGroup.get('inputPasswordValue')?.value,
        searchInput: this.formGroup.get('inputSearchValue')?.value,
        datePicker: this.formGroup.get('datePickerValue')?.value,
        dateRangePicker: {
          start:
            this.formGroup.controls.rangeDatePickerValue.controls
              .startDateControl.value._d,
          end: this.formGroup.controls.rangeDatePickerValue.controls
            .endDateControl.value._d,
        },
        listOfInformations: this.listInformations,
        selectionList: {
          selectionOptions: this.selectedCheckBoxOptions.filter(
            (value1) => value1 !== ''
          ),
        },
        actionList: this.selectedAction,
        nativeSelect: this.formGroup.controls.nativeSelectValue.value,
        menu: this.formGroup.controls.menuControl.value,
        chip: this.formGroup.controls.chipsControl.value,
        radio: this.radioSelectedOption,
        checkbox: this.selectedCheckBox.filter((value1) => value1 !== ''),
        multiOptions: this.selectedMultiSelectOptions,
      };
      this.formService.addForm(this.form).subscribe(() => {
        this.router.navigateByUrl('').then(() => {
          alert('form saved successfully');
          window.location.reload();
        });
      });
    } else {
      // Handle form validation errors
    }
  }

  // save form
  number: any= 1;

  setRadioValue($event: string) {
    this.radioSelectedOption = $event;
  }

  checkBoxAdd(value: string, i: number) {
    this.selectedCheckBox[i] = value;
  }
  optionsAdd($event: string[]) {
    this.selectedCheckBoxOptions = $event;
  }

  handleChangeValues(multiSelectedOptions: Option[]) {
    this.selectedMultiSelectOptions = multiSelectedOptions;
  }

  getDate(number: any) {
      this.formService.getFormById(number).subscribe((res) => {
      this.formGroup.controls.inputTextValue.setValue(res.textInput);
      this.formGroup.controls.inputPasswordValue.setValue(res.passwordInput);
      this.formGroup.controls.inputSearchValue.setValue(res.searchInput);
      this.formGroup.controls.datePickerValue.setValue(res.datePicker);
      this.formGroup.controls.rangeDatePickerValue.controls.startDateControl.setValue(
        res.dateRangePicker.start);
      this.formGroup.controls.rangeDatePickerValue.controls.endDateControl.setValue(
        res.dateRangePicker.end);
      this.listInformations = res.listOfInformations;
      this.selectedCheckBoxOptions = res.selectionList.selectionOptions;
      this.selectedAction = res.actionList;
      this.formGroup.controls.nativeSelectValue.setValue(res.nativeSelect);
      this.formGroup.controls.menuControl.setValue(res.menu);
      this.formGroup.controls.chipsControl.setValue(res.chip);
      this.radioSelectedOption = res.radio;
      this.selectedCheckBox = res.checkbox;
      this.selectedMultiSelectOptions = res.multiOptions;
      this.number = res.id;
      }
      );
  }
}
