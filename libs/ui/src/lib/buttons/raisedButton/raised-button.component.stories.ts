import { Meta } from '@storybook/angular';
import { RaisedButtonComponent } from './raised-button.component';

export default {
  title: 'Buttons/RaisedButtonComponent',
  component: RaisedButtonComponent,
  argTypes: {
    icon: {
      control: 'radio',
      options: ['', 'add'],
    },
    color: {
      control: 'radio',
      options: ['primary', 'accent', 'warn'],
    },
    type: {
      control: 'radio',
      options: ['button', 'submit', 'reset'],
    },
  },
} as Meta<RaisedButtonComponent>;

export const Primary = {
  render: (args: RaisedButtonComponent) => ({
    props: args,
  }),
  args: {
    label: 'Button',
    type: 'button',
    disabled: false,
  },
};
