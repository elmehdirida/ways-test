import { Meta, moduleMetadata } from '@storybook/angular';
import { DialogComponent } from './dialog.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'DialogComponent',
  component: DialogComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
} as Meta<DialogComponent>;

export const Primary = {
  render: (args: DialogComponent) => ({
    props: args,
  }),
  args: {
  },
};
