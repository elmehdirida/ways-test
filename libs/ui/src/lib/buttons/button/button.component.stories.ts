import { Meta } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Buttons/ButtonComponent',
  component: ButtonComponent,
  argTypes: {
    icon: {
      control: 'radio',
      options: ['', 'add', 'textWithBadge', 'textWithIcon'],
    },
    color: {
      control: 'radio',
      options: ['primary', 'accent', 'warn'],
    },
    type: {
      control: 'radio',
      options: ['button', 'submit', 'reset'],
    },
    badge: {
      control: 'number',
    },
  },
} as Meta<ButtonComponent>;

export const Primary = {
  render: (args: ButtonComponent) => ({
    props: args,
  }),
  args: {
    label: 'Button',
    disabled: false,
  },
};

// export const InteractiveButton : Story = {
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);

//     // Simulate a click on the button
//     const button = canvas.getByRole('button');
//     await userEvent.click(button);
//   },
// }
