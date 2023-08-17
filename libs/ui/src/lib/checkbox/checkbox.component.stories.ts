import { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CheckboxComponent> = {
  title: 'select/CheckboxComponent',
  component: CheckboxComponent,
  argTypes: {
    checked: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    color: { control: 'radio', options: ['primary', 'accent', 'warn'] },
    labelPosition: { control: 'radio', options: ['before', 'after'] },
    indeterminate: { control: 'boolean', options: [true, false] },
    disabled: { control: 'boolean', options: [true, false] },
    newStatus: { action: 'status', control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<CheckboxComponent>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checked = canvas.getByRole('checkbox');
    await userEvent.click(checked);
    const label = canvas.getByRole('label');
    const labelExp = 'label';
    expect(label).toHaveTextContent(labelExp);
  
  }
};
