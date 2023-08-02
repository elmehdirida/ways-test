import { Meta } from '@storybook/angular';
import { MenuComponent } from './menu.component';

export default {
  title: 'MenuComponent',
  component: MenuComponent,
  argTypes: {
    color: { control: 'radio',
    options :['primary','accent','warn'] },
  },
} as Meta<MenuComponent>;

export const Primary = {
  render: (args: MenuComponent) => ({
    props: args,
  }),
  args: {},
};
