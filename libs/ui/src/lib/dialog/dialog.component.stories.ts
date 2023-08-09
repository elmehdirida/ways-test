import { Meta, moduleMetadata } from '@storybook/angular';
import { DialogComponent } from './dialog.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'DialogComponent',
  component: DialogComponent,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    content: { control: 'text' },
    avatarSrc : {control: 'text'},
    imgSrc : {control: 'text'}
  },
} as Meta<DialogComponent>;

export const Primary = {
  render: (args: DialogComponent) => ({
    props: args,
  }),
  args: {
    title: 'titlee',
    content: 'content',
    subtitle : "subtitle",
    imgSrc : "logo.png",
    avatarSrc : "logo.png"
  },
};
