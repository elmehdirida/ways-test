import {Meta, moduleMetadata} from '@storybook/angular';
import { SideNavDividerComponent } from './side-nav-divider.component';
import {CommonModule} from "@angular/common";
import {MatListModule} from "@angular/material/list";

export default {
  title: 'SideNavDividerComponent',
  component: SideNavDividerComponent,
  decorators : [
    moduleMetadata({
      imports: [CommonModule,MatListModule],
    }),
  ]
} as Meta<SideNavDividerComponent>;

export const Primary = {
  render: (args: SideNavDividerComponent) => ({
    props: args,
  }),
  args: {},
};
