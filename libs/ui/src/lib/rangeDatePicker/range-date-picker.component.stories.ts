import {Meta, moduleMetadata} from '@storybook/angular';
import { RangeDatePickerComponent } from './range-date-picker.component';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export default {
  title: 'DatePickers/RangeDatePickerComponent',
  component: RangeDatePickerComponent,
  argTypes : {
    newStartDate : {action : "start"},
    newEndDate : {action : "end "}
  },
  decorators : [
    moduleMetadata({
      imports: [CommonModule,BrowserAnimationsModule],
    }),
  ]
} as Meta<RangeDatePickerComponent>;

export const Primary = {
  render: (args: RangeDatePickerComponent) => ({
    props: args,
  }),
  args: {},
};
