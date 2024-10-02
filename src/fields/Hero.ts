import type { Field } from 'payload'

import { RichText } from './RichText'

import { Link } from './Link'

export const Hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    ...RichText('content', false),
    {
      name: 'image',
      relationTo: 'media',
      type: 'upload',
      // required: true,
    },
    Link(false),
  ],
}
