import { Meta } from '@storybook/angular';
import { LinesComponent } from './lines.component';

export default {
  title: 'LinesComponent',
  component: LinesComponent,
} as Meta<LinesComponent>;

export const Primary = {
  render: (args: LinesComponent) => ({
    props: args,
  }),
  args: {},
};
