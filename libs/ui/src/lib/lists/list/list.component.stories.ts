import { Meta } from '@storybook/angular';
import { ListComponent } from './list.component';

export default {
  title: 'ListComponent',
  component: ListComponent,
} as Meta<ListComponent>;

export const Primary = {
  render: (args: ListComponent) => ({
    props: args,
  }),
  args: {
    title: 'Saved export template 1',
    content:
      'Field name 1, Field name 2, Field name 3, Field name 4,Field name 5,Field name X',
  },
};