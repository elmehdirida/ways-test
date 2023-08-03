import { Meta } from '@storybook/angular';
import { SliderUiComponent } from './slider-ui.component';

export default {
  title: 'select/SliderUiComponent',
  component: SliderUiComponent,
} as Meta<SliderUiComponent>;

export const Primary = {
  render: (args: SliderUiComponent) => ({
    props: args,
  }),
  args: {
    enable: true
    },
};
