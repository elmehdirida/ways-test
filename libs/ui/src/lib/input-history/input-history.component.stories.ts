import {applicationConfig, Meta, moduleMetadata} from '@storybook/angular';
import { InputHistoryComponent } from './input-history.component';
import {FormControl} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {importProvidersFrom} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export default {
  title: 'inputs/InputHistoryComponent',
  component: InputHistoryComponent,
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
    applicationConfig({
      providers: [importProvidersFrom(BrowserAnimationsModule)],
    }),

  ]
} as Meta<InputHistoryComponent>;

export const Primary = {
  render: (args: InputHistoryComponent) => ({
    props: args,
  }),
};
