import { Meta } from '@storybook/angular';
import { CardLetterComponent } from './card-letter.component';

export default {
  title: 'CardLetterComponent',
  component: CardLetterComponent,
} as Meta<CardLetterComponent>;

export const Primary = {
  render: (args: CardLetterComponent) => ({
    props: args,
  }),
  args: {},
};
