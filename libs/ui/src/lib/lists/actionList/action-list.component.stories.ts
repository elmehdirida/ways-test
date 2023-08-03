import { Meta } from '@storybook/angular';
import { ActionListComponent } from './action-list.component';

export default {
  title: 'ActionListComponent',
  component: ActionListComponent,
} as Meta<ActionListComponent>;

export const Primary = {
  render: (args: ActionListComponent) => ({
    props: args,
  }),
  args: {
    items: ['Frauen', 'Mode', 'Geht doch!'],
  },
};