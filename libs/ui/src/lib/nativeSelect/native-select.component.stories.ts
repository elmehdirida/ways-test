import {Meta, moduleMetadata} from '@storybook/angular';
import { NativeSelectComponent } from './native-select.component';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export default {
  title: 'NativeSelectComponent',
  component: NativeSelectComponent,
  argTypes: {
    defaultLabel: { control: 'text' },
  },
  decorators : [
    moduleMetadata({
      imports: [CommonModule,BrowserAnimationsModule],
    }),
  ]
} as Meta<NativeSelectComponent>;

export const Primary = {
  render: (args: NativeSelectComponent) => ({
    props: args,
  }),
  args: {
    defaultLabel :'Saved Filter' ,
  },
};
