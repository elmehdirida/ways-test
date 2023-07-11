import { Meta } from '@storybook/angular';
import { MainMosineComponent } from './main-mosine.component';

export default {
  title: 'MainMosineComponent',
  component: MainMosineComponent,
} as Meta<MainMosineComponent>;

export const Primary = {
  render: (args: MainMosineComponent) => ({
    props: args,
  }),
  args: {},
};
