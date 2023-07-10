import { Meta } from '@storybook/angular';
import { InputUiComponent } from './input-ui.component';

export default {
  title: 'InputUiComponent',
  component: InputUiComponent,
} as Meta<InputUiComponent>;

export const Primary = {
  render: (args: InputUiComponent) => ({
    props: args,
  }),
  args: {
    textHolder :''
  },
};
