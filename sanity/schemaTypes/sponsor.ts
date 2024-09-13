const sponsor = {
    name: 'sponsor',
    title: 'Sponsor',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'Navn på sponsoren',
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
        description: 'Logo eller bilde av sponsoren',
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
        description: 'Hva har sponsoren bidratt med?',
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