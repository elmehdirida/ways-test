import {Meta, moduleMetadata} from '@storybook/angular';
import { TextAreaComponent } from './text-area.component';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export default {
  title: 'Inputs/TextAreaComponent',
  component: TextAreaComponent,
  argTypes: {
    placeHolder: { control: 'text' },
    value: { control: 'text'},
    required: {
      control: 'boolean',
    },
  },
  decorators : [
    moduleMetadata({
      imports: [CommonModule,BrowserAnimationsModule],
    }),

  ]
} as Meta<TextAreaComponent>;

export const Primary = {
  render: (args: TextAreaComponent) => ({
    props: args,
  }),
  args : {
    placeHolder: 'holder input',
    value: 'input value',
    required: false
  }
};
