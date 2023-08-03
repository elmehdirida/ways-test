import { Meta } from '@storybook/angular';
import { TreeComponent } from './tree.component';

export default {
  title: 'lists/TreeComponent',
  component: TreeComponent,
} as Meta<TreeComponent>;

export const Primary = {
  render: (args: TreeComponent) => ({
    props: args,
  }),
  args: {},
};
