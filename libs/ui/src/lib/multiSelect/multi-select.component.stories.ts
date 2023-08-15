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
  args: {
    options: [
      { value: 1, label: 'One' },
      { value: 2, label: 'Two' },
      { value: 3, label: 'Three' },
      { value: 4, label: 'Four' },
      { value: 5, label: 'Five' },
      { value: 6, label: 'Six' },
      { value: 7, label: 'Seven' },
      { value: 8, label: 'Eight' },
    ],
  },
};
