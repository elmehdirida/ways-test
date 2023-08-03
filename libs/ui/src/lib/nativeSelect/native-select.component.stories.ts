import {Meta, moduleMetadata} from '@storybook/angular';
import { NativeSelectComponent } from './native-select.component';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export default {
  title: 'select/NativeSelectComponent',
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
    selectOptions : ["Filter Name 1","Filter Name 2","Filter Name 3","Filter Name 4"]
  },
};
