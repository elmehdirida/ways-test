import { Meta } from '@storybook/angular';
import { RadioComponent } from './radio.component';

export default {
    title: 'select/RadioComponent',
  component: RadioComponent,
  argTypes: {
    label: { control: 'text', label: 'Label' },
    disabled: { control: 'boolean', disablecd: false },
    color: { control: 'radio', options: ['primary', 'accent', 'warn'] },
    labelPosition: { control: 'radio', options: ['before', 'after'] },
  },
} as Meta<RadioComponent>;

export const Primary = {
  render: (args: RadioComponent) => ({
    props: args,
  }),
  args: {
    label : 'radio',
    disabled: true
  },
};
