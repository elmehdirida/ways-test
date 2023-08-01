import { Meta } from '@storybook/angular';
import { SelectionListComponent } from './selection-list.component';

export default {
  title: 'SelectionListComponent',
  component: SelectionListComponent,
  argTypes: {
    color: {
      control: 'radio',
      options: ['primary', 'accent', 'warn'],
    },
  },
} as Meta<SelectionListComponent>;

export const Primary = {
  render: (args: SelectionListComponent) => ({
    props: args,
  }),
  args: {
    typesOfShoes: ['Field name 1', 'Field name 2', 'Field name 3'],
  },
};
