import { Meta } from '@storybook/angular';
import { ChipComponent } from './chip.component';

export default {
  title: 'select/ChipComponent',
  component: ChipComponent,
} as Meta<ChipComponent>;

export const Primary = {
  render: (args: ChipComponent) => ({
    props: args,
  }),
  args: {
    options: ['verfügbar', 'reserviert', 'nicht verfügbar'],

    optionColors: [
      { bgColor: '#b5ffd2', textColor: '#00752E' },
      { bgColor: '#FDF5CA', textColor: '#B44100' },
      { bgColor: '#FFCDD6', textColor: '#B44100' },
    ],
  },
};
