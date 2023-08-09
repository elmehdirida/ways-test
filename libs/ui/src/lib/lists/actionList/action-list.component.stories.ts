import {Meta} from '@storybook/angular';
import { ActionListComponent } from './action-list.component';


export default {
  title: 'lists/ActionListComponent',
  component: ActionListComponent,
  argTypes : {
    selectedValueClicked : {action : "selected"}
  }
} as Meta<ActionListComponent>;

export const Primary = {
  render: (args: ActionListComponent) => ({
    props: args,
  }),
  args: {
    items: ['Frauen', 'Mode', 'Geht doch!'],
  },
};
