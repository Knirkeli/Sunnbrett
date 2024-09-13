const imagesDisplay = {
    name: 'imageWithDetails',
    title: 'Bilder',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        description: 'Bilder lagt til her vil vises på forsiden av nettsiden',
        options: {
          hotspot: true 
        },
        fields: [
          {
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
            description: 'Alternativ tekst for bildet, for skjermlesere'
          }
        ]
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Tittel på bildet'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Beskrivelse av bildet'
      },
      {
        name: 'date',
        title: 'Date',
        type: 'datetime',
        description: 'Dato bildet ble tatt'
      }
    ]
};

export default imagesDisplay;