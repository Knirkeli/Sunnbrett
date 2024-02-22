const omOss = {
    name: 'aboutPage',
    title: 'Om oss',
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
        name: 'boardMembers',
        title: 'Board Members',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'meetingTime',
        title: 'Meeting Time',
        type: 'object',
        fields: [
          { name: 'dayOfWeek', title: 'Day of Week', type: 'string' },
          { name: 'fromTime', title: 'From Time', type: 'string' },
          { name: 'toTime', title: 'To Time', type: 'string' },
        ],
      },
      {
        name: 'link',
        title: 'Link',
        type: 'url',
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image' }],
      },
      {
        name: 'shortText',
        title: 'Short Text',
        type: 'string',
      },
    ],
  }
  
  export default omOss;