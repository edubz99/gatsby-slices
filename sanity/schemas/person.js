import { MdPerson as Icon } from 'react-icons/md';

export default {
  // name is what the computer will reference it as
  name: 'person',
  // title is what we will reference it as
  title: 'Slicemasters',
  type: 'document',
  icon: Icon,
  fields: [
    {
      name: 'name',
      title: ' Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        // This mean the slug will be auto generated from the person name above
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Tell us a bit about this person',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
