import { Meta } from '@storybook/angular';
import { CardLetterComponent } from './card-letter.component';

export default {
  title: 'Cards/NormalCardComponent',
  component: CardLetterComponent,
  argTypes: {
    letter: { control: 'object' },
  },
} as Meta<CardLetterComponent>;

export const Primary = {
  render: (args: CardLetterComponent) => ({
    props: args,
  }),
  args: {
    letter :    {
      id: 1,
      receiverAddress: [
        "456 Elm St, City"
      ],
      subject: "Example Subject 1",
    }
  },
};
