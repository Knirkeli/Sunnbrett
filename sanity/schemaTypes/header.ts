const header = {
    name: 'header',
    title: 'Header',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            }
          ]
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
    ],
    preview: {
      select: {
        title: 'title',
        media: 'image',
      },
      
    },
  };

  export default header;