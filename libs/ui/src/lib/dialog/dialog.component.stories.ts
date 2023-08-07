import { Meta, applicationConfig, moduleMetadata } from '@storybook/angular';
import { DialogComponent } from './dialog.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'DialogComponent',
  component: DialogComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
    applicationConfig({
      providers: [importProvidersFrom(MatDialogRef)],
    }),
  ],
} as Meta<DialogComponent>;

export const Primary = {
  render: (args: DialogComponent) => ({
    props: args,
  }),
  args: {
    title: 'My Dialog',
    content: 'Test content',
    buttons: [
      {
        label: 'Cancel',
        action: () => {
          console.log('Cancel');
        },
      },
    ],
  },
};
