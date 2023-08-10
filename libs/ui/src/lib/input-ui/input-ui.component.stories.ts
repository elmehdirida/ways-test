import {applicationConfig, Meta, moduleMetadata} from '@storybook/angular';
import { InputUiComponent } from './input-ui.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {importProvidersFrom} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";

export default {
  title: 'Inputs/InputUiComponent',
  component: InputUiComponent,
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
} as Meta<InputUiComponent>;

export const Primary = {
  render: (args: InputUiComponent) => ({
    props: args,
  }),
  args: {
    placeHolder: 'holder input',
    value: 'input value',
    required: false,
    type: 'text',
  },
};
