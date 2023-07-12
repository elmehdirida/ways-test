import { Meta } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepickerComponent } from './datepicker.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'DatepickerComponent',
  component: DatepickerComponent,
  imports: [CommonModule, BrowserAnimationsModule],
} as Meta<DatepickerComponent>;

export const Primary = {
  render: (args: DatepickerComponent) => ({
    props: args,
  }),
  args: {},
};
