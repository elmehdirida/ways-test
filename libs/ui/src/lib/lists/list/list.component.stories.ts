import {applicationConfig, Meta} from '@storybook/angular';
import { ListComponent } from './list.component';
import {importProvidersFrom} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export default {
  title: 'lists/ListComponent',
  component: ListComponent,
  decorators :[
    applicationConfig({
      providers: [importProvidersFrom(BrowserAnimationsModule)],
    }),
  ],
} as Meta<ListComponent>;

export const Primary = {
  render: (args: ListComponent) => ({
    props: args,
  }),
  args: {
    listInformations: [
      {
        title: 'Saved export template 1',
        content:
          'Field name 1, Field name 2, Field name 3, Field name 4,Field name 5,Field name X',
      },
      {
        title: 'Saved export template 2',
        content:
          'Field name 2, Field name 2, Field name 3, Field name 4,Field name 5,Field name X',
      },
      {
        title: 'Saved export template 3',
        content:
          'Field name 3, Field name 2, Field name 3, Field name 4,Field name 5,Field name X',
      },
      {
        title: 'Saved export template 4',
        content:
          'Field name 4, Field name 2, Field name 3, Field name 4,Field name 5,Field name X',
      },
    ],
  },
};
