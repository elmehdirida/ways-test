export class Form {
  id!: number;
  textInput!: string;
  passwordInput!: string;
  searchInput!: string;
  datePicker!: string;
  dateRangePicker!: [start: string, end: string];
  listInformations!: [
    {
      title: string;
      content: string;
    }
  ];
  selectionList!: [
    options: string[],
    optionColors: [{ bgColor: string; textColor: string }]
  ];
  actionList!: string[];
  nativeSelect!: string;
  menu!: string;
  chip!: string;
  radio!: string;
  checkbox!: string[];
}
