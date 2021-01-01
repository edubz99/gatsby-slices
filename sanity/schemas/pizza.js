import { MdLocalPizza as Icon } from 'react-icons/md';
import PriceInput from '../components/PriceInput';

export default {
  // name is what the computer will reference it as
  name: 'pizza',
  // title is what we will reference it as
  title: 'Pizzas',
  type: 'document',
  icon: Icon,
  fields: [
    {
      name: 'name',
      title: 'Pizza Name',
      type: 'string',
      description: 'Name of the pizza',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        // This mean the slug will be auto generated from the pizza name above
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the pizza in cents',

      // We use this to define a minimum or maximum(.max()) value we want the price to be in cents
      validation: (Rule) => Rule.min(1000).max(50000),
      inputComponent: PriceInput,
    },
    {
      name: 'toppings',
      title: 'Toppings',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topping' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      topping0: 'toppings.0.name',
      topping1: 'toppings.1.name',
      topping2: 'toppings.2.name',
      topping3: 'toppings.3.name',
    },
    prepare: ({ title, media, ...toppings }) => {
      // console.log(title, media, toppings);
      // 1. Filter out undefined toppings out
      const filteredToppings = Object.values(toppings).filter(Boolean);
      console.log(filteredToppings);
      // 2. return the preview object for the pizza
      return {
        title,
        media,
        subtitle: filteredToppings.join(', '),
      };
    },
  },
};
