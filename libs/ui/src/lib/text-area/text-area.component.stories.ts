import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import { TextAreaComponent } from './text-area.component';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { userEvent, within} from "@storybook/testing-library";
import {expect} from "@storybook/jest";



const meta : Meta<TextAreaComponent> = {
  component: TextAreaComponent,
  title: 'Inputs/TextAreaComponent',
  argTypes: {
    onChangeValue : {action : "changed value"},
    placeHolder: { control: 'text' },
    value: { control: 'text'},
    required: {
      control: 'boolean',
    },
  },
  args : {
    placeHolder: 'holder input',
  },

  decorators : [
    moduleMetadata({
      imports: [CommonModule,BrowserAnimationsModule],
    }),

  ]
}
export default meta;
type Story = StoryObj<TextAreaComponent>;

export const Primary :Story = {
  args: {
    required: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const enteredText = 'email@rida.com'
    const  labelArea = canvas.getByRole('holder')
    const textarea = canvas.getByRole('textbox');
    await userEvent.type(textarea, 'email@rida.com');
    expect(textarea).toHaveValue(enteredText);
    expect(textarea).toBeRequired();
    expect(labelArea).toHaveTextContent('holder input');
    await userEvent.keyboard('{tab}');
    await userEvent.clear(textarea);
    expect(textarea).toHaveValue('');
    await userEvent.keyboard('{tab}');
    const error = canvas.getByRole('row');
    expect(error).toHaveTextContent('required');

  },
};
