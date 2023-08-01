import {Meta, moduleMetadata} from '@storybook/angular';
import { DividerComponent } from './divider.component';
import {CommonModule} from "@angular/common";
import {DividersModule} from "../dividers.module";

export default {
  title: 'DividerComponent',
  component: DividerComponent,
  decorators : [
    moduleMetadata({
      imports: [CommonModule,DividersModule],
    }),
  ]
} as Meta<DividerComponent>;

export const Primary = {
  render: (args: DividerComponent) => ({
    props: args,
  }),
  args: {},
};
