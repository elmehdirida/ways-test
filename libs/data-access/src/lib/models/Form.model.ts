export class Formation {
  title!: string;
  content!: string;
}

export class OptionColors {
  bgColor!: string;
  textColor!: string;
}

export class Form {
  id?: number;
  textInput!: string;
  passwordInput!: string;
  searchInput!: string;
  datePicker!: string;
  dateRangePicker!: {start: string, end: string};
  listOfInformations!: Formation[]
  selectionList!: {
    selectionOptions: string[],
    optionColors: OptionColors[]
  };
  actionList!: string;
  nativeSelect!: string;
  menu!: string;
  chip!: string;
  radio!: string;
  checkbox!: string[];
}
