import { Meta } from '@storybook/angular';
import { SlideToggleMosineComponent } from './slide-toggle-mosine.component';

export default {
  title: 'SlideToggleMosineComponent',
  component: SlideToggleMosineComponent,
} as Meta<SlideToggleMosineComponent>;

export const Primary = {
  render: (args: SlideToggleMosineComponent) => ({
    props: args,
  }),
  args: {},
};
