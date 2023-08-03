import { Meta } from '@storybook/angular';
import { CardComponent } from './card.component';

export default {
  title: 'Cards/CardComponent',
  component: CardComponent,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    content: { control: 'text' },
  },
} as Meta<CardComponent>;

export const Primary = {
  render: (args: CardComponent) => ({
    props: args,
  }),
  args: {
    title: "Card Title",
    subtitle: "subtitle",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
  },
};
