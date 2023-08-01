import {Meta, moduleMetadata} from '@storybook/angular';
import { InputUiComponent } from './input-ui.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";

export default {
  title: 'InputUiComponent',
  component: InputUiComponent,
  argTypes: {
    placeHolder: { control: 'text' },
    value: { control: 'text' },
    required: {
      control: 'boolean',
    },
    type: {
      control: 'radio',
      options: ['text', 'password','search'],
    },
  },
  decorators : [
    moduleMetadata({
      imports: [CommonModule,BrowserAnimationsModule ,MatIconModule],
    }),
  ]
} as Meta<InputUiComponent>;

export const Primary = {
  render: (args: InputUiComponent) => ({
    props: args,
  }),
  args :{
    placeHolder: 'holder input',
    value: 'input value',
    required: false,
    type: 'text'
  }
};
