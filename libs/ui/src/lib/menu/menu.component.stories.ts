import { Meta, moduleMetadata } from '@storybook/angular';
import { MenuComponent } from './menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

export default {
  title: 'MenuComponent',
  component: MenuComponent,
  decorators : [
    moduleMetadata({
      imports: [CommonModule,BrowserAnimationsModule],
    }),
  ],
  argTypes: {
    color: { control: 'radio',
    options :['primary','accent','warn'] },
  },
} as Meta<MenuComponent>;

export const Primary = {
  render: (args: MenuComponent) => ({
    props: args,
  }),
  args: {
    menuOptions : ['Menu Item 1', 'Menu Item 2']
  },
};
