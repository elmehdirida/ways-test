import {Meta, moduleMetadata} from '@storybook/angular';
import { ExpansionPanelComponent } from './expansion-panel.component';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {MatBadgeModule} from "@angular/material/badge";

export default {
  title: 'lists/ExpansionPanelComponent',
  component: ExpansionPanelComponent,
  argTypes: {
    elementsCount: { control: 'number' },
    panelTitle: { control: 'text' },
    content: { control: 'text' },
  },
  decorators : [
    moduleMetadata({
      imports: [CommonModule,BrowserAnimationsModule ,MatIconModule,MatTabsModule, MatBadgeModule],
    }),
  ]
} as Meta<ExpansionPanelComponent>;

export const Primary = {
  render: (args: ExpansionPanelComponent) => ({
    props: args,
  }),
  args: {
    elementsCount: 2,
    panelTitle:'Panel X',
    content: 'this is the content',
  },
};
