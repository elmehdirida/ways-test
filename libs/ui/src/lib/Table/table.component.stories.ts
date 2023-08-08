import {applicationConfig, Meta, moduleMetadata} from '@storybook/angular';
import { TableComponent } from './table.component';
import {CommonModule} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {MatDialogRef} from "@angular/material/dialog";
export default {
  title: 'Tables/TableComponent',
  component: TableComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
    applicationConfig({
      providers: [importProvidersFrom(HttpClientModule)],
    }),
  ],
} as Meta<TableComponent>;

export const Primary = {
  render: (args: TableComponent) => ({
    props: args,
  }),
  args: {},
};
