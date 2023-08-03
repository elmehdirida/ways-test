import { Meta } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';

export default {
  title: 'CheckboxComponent',
  component: CheckboxComponent,
  argTypes: {
    color: { control: 'radio',
    options: ['primary', 'accent', 'warn'] },
    labelPosition: { control: 'radio',
    options: ['before', 'after'] },
    indeterminate: { control: 'boolean',
    options: [true, false] },
    disabled: { control: 'boolean',
    options: [true, false] },
    
   
  },
} as Meta<CheckboxComponent>;

export const Primary = {
  render: (args: CheckboxComponent) => ({
    props: args,
  }),
  args: {},
};
