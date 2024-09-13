/**
 * Represents a board game in the Sanity schema.
 */
const boardGame = {
    name: 'boardgame',
    title: 'Brettspill',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'Navn på brettspillet',
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
            description: 'Bilde av brettspillet husk at store filer kan gjøre siden tregere',
            options: {
                hotspot: true,
            },
            fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative Text',
                  description: 'Alternativ tekst for bildet, for skjermlesere'
                }
              ]
        },
        {
            name: 'tag',
            title: 'Tag',
            type: 'string',
            description: 'Tag for brettspillet disse kan brukes til å gruppere brettspill, f.eks. "Strategi" eller "Fantasy"',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Beskriv spillet'
        },
    ],
};

export default boardGame;
  