import {Meta, StoryObj, moduleMetadata} from '@storybook/angular';
import { TextAreaComponent } from './text-area.component';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {userEvent, within} from "@storybook/testing-library";



const meta : Meta<TextAreaComponent> = {
  component : TextAreaComponent,
}

export default meta;
type Story = StoryObj<TextAreaComponent>;


export const defaultStory : Story = {
  title: 'Inputs/TextAreaComponent',
  component: TextAreaComponent,
  argTypes: {
    placeHolder: { control: 'text' },
    value: { control: 'text'},
    required: {
      control: 'boolean',
    },
  },
  decorators : [
    moduleMetadata({
      imports: [CommonModule,BrowserAnimationsModule],
    }),

  ]
} as Meta<TextAreaComponent>;

export const Primary: Story = {
  render: (args: TextAreaComponent) => ({
    props: args,
  }),
  args : {
    placeHolder: 'holder input',
    value: 'input value',
    required: false
  },

  play : async ({canvasElement}) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole('textbox'), 'email@provider.com')
  }
};
