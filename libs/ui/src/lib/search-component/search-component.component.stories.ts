import { Meta, applicationConfig, moduleMetadata } from '@storybook/angular';
import { SearchComponentComponent } from './search-component.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'SearchComponentComponent',
  component: SearchComponentComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MatIconModule],
    }),
    applicationConfig({
      providers: [importProvidersFrom(BrowserAnimationsModule)],
    }),
  ],
  
} as Meta<SearchComponentComponent>;

export const Primary = {
  render: (args: SearchComponentComponent) => ({
    props: args,
  }),
  args: {},
};
