const kontakt = {
    name: 'contactInfo',
    title: 'Kontakt Info',
    type: 'document',
    fields: [
      {
        name: 'header',
        title: 'Header',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'header',
          maxLength: 96,
        },
      },
      {
        name: 'mail',
        title: 'Mail',
        type: 'string',
      },
      {
        name: 'address',
        title: 'Address',
        type: 'string',
      },
    ],
  }
  export default kontakt;