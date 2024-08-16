// const imagesDisplay = {
//     name: 'imageWithDetails',
//     title: 'Bilder',
//     type: 'document',
//     fields: [
//       {
//         name: 'image',
//         title: 'Image',
//         type: 'image',
//         options: {
//           hotspot: true // Enables image cropping
//         },
//         fields: [
//           {
//             name: 'alt',
//             title: 'Alt Text',
//             type: 'string',
//             description: 'Alternative text for the image'
//           }
//         ]
//       },
//       {
//         name: 'description',
//         title: 'Description',
//         type: 'text',
//         description: 'A description of the image'
//       },
//       {
//         name: 'date',
//         title: 'Date',
//         type: 'datetime',
//         description: 'The date the image was added'
//       }
//     ]
// };

// export default imagesDisplay;

const imagesDisplay = {
    name: 'imageWithDetails',
    title: 'Bilder',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true // Enables image cropping
        },
        fields: [
          {
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
            description: 'Alternative text for the image'
          }
        ]
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Title of the image'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'A description of the image'
      },
      {
        name: 'date',
        title: 'Date',
        type: 'datetime',
        description: 'The date the image was added'
      }
    ]
};

export default imagesDisplay;