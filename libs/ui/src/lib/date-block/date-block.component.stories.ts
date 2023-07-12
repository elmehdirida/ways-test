import { Meta } from '@storybook/angular';
import { DateBlockComponent } from './date-block.component';

export default {
  title: 'DateBlockComponent',
  component: DateBlockComponent,
} as Meta<DateBlockComponent>;

export const Primary = {
  render: (args: DateBlockComponent) => ({
    props: args,
  }),
  args: {},
};
