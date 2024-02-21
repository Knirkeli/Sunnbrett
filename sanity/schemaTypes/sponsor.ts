const sponsor = {
    name: 'sponsor',
    title: 'Sponsor',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
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
        title: 'name',
        media: 'image',
      },
    },
  };
  
export default sponsor;