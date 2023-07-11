import { Meta } from '@storybook/angular';
import { TextAreaComponent } from './text-area.component';

export default {
  title: 'TextAreaComponent',
  component: TextAreaComponent,
} as Meta<TextAreaComponent>;

export const Primary = {
  render: (args: TextAreaComponent) => ({
    props: args,
  }),
  args: {},
};
