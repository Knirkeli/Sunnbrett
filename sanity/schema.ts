import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import category from './schemaTypes/category'
import post from './schemaTypes/post'
import author from './schemaTypes/author'
import boardGame from './schemaTypes/boardGames'
import sponsor from './schemaTypes/sponsor'
import header from './schemaTypes/header'
import kontakt from './schemaTypes/kontakt'
import imagesDisplay from './schemaTypes/imagesDisplay'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, boardGame, sponsor, header, kontakt, imagesDisplay],
}
