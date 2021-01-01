import { FaPepperHot as Icon } from 'react-icons/fa';

export default {
  // name is what the computer will reference it as
  name: 'topping',
  // title is what we will reference it as
  title: 'Toppings',
  type: 'document',
  icon: Icon,
  fields: [
    {
      name: 'name',
      title: 'Topping Name',
      type: 'string',
      description: 'What is the name of the topping?',
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      description: 'Is the pizza vegetarian?',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
    },
    prepare: ({ name, vegetarian }) => ({
      title: `${name} ${vegetarian ? '🌱' : ''} `,
    }),
  },
};
