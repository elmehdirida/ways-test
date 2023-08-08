import { Meta } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';

export default {
  title: 'select/CheckboxComponent',
  component: CheckboxComponent,
  argTypes: {
    checked : {
      control : 'boolean'
    },
    color: { control: 'radio',
    options: ['primary', 'accent', 'warn'] },
    labelPosition: { control: 'radio',
    options: ['before', 'after'] },
    indeterminate: { control: 'boolean',
    options: [true, false] },
    disabled: { control: 'boolean',
    options: [true, false] },
    newStatus : {action : 'status' , control : 'boolean'}


  },
} as Meta<CheckboxComponent>;

export const Primary = {
  render: (args: CheckboxComponent) => ({
    props: args,
  }),
  args: {},
};
