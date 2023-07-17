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
  args: {
    body:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
    isRequired: true
  },
};
