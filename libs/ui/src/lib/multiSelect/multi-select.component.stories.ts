import { Meta, moduleMetadata } from '@storybook/angular';
import { MultiSelectComponent } from './multi-select.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'MultiSelectComponent',
  component: MultiSelectComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, BrowserAnimationsModule],
    }),
  ],
} as Meta<MultiSelectComponent>;

export const Primary = {
  render: (args: MultiSelectComponent) => ({
    props: args,
  }),
  args: {},
};
