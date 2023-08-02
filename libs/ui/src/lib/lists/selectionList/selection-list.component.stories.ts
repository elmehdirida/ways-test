import { Meta } from '@storybook/angular';
import { SelectionListComponent } from './selection-list.component';

export default {
  title: 'SelectionListComponent',
  component: SelectionListComponent,
  argTypes: {
    color: {
      control: 'radio',
      options: ['primary', 'accent', 'warn'],
    }
},
} as Meta<SelectionListComponent>;

export const Primary = {
  render: (args: SelectionListComponent) => ({
    props: args,
  }),
  args: {
    typesOfShoes : [
      'verfügbar', 
      'reserviert',
      'nicht verfügbar',
    ],
    
    shoeColors : [
      {bgColor: '#b5ffd2', textColor: '#00752E'},
      {bgColor: '#FDF5CA', textColor: '#B44100'},
      {bgColor: '#FFCDD6', textColor: '#B44100'},
    ],
  },
};
