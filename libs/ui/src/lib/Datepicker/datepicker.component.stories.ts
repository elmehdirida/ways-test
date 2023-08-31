import {Meta, moduleMetadata} from '@storybook/angular';
import { DatepickerComponent } from './datepicker.component';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export default {
  title: 'DatePickers/DatepickerComponent',
  component: DatepickerComponent,
  argTypes : {
    dateLabel : {type : "string"}
  },
  decorators : [
    moduleMetadata({
    imports: [CommonModule,BrowserAnimationsModule],
  }),
  ]
  
} as Meta<DatepickerComponent>;

export const Primary = {
  render: (args: DatepickerComponent) => ({
    props: args,
  }),
  args: {
    dateLabel : "chose a date "
  },
};
