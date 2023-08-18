import {applicationConfig, Meta, moduleMetadata} from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {importProvidersFrom} from "@angular/core";
import {InputAutoCompeletComponent} from "./input-auto-compelet.component";

export default {
  title: 'Inputs/InputAutoCompleteComponent',
  component: InputAutoCompeletComponent,
  argTypes: {
    onChangeValue : {action : "changed value"},
    placeHolder: { control: 'text'  },
    value: { control: 'text' },
    required: {
      control: 'boolean',
    },
    disable: {
      control: 'boolean',
    },
    type: {
      control: 'radio',
      options: ['text', 'password', 'search'],
    },
  },
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MatIconModule],
    }),
    applicationConfig({
      providers: [importProvidersFrom(BrowserAnimationsModule)],
    }),

  ],
} as Meta<InputAutoCompeletComponent>;

export const Primary = {
  render: (args: InputAutoCompeletComponent) => ({
    props: args,
  }),
  args: {
    placeHolder: 'holder input',
    required: false,
    type: 'text',
  },
};
