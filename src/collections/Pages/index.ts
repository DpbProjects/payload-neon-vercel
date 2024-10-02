import type { CollectionConfig } from 'payload'

import { Hero } from '@/fields/Hero'
// import { features } from '../_blocks/features'
// import { testimonials } from '../_blocks/testimonials'
// import { imageGrid } from '../_blocks/image-grid'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [Hero],
        },
        // {
        //   label: 'Content',
        //   fields: [
        //     {
        //       name: 'layout',
        //       type: 'blocks',
        //       required: true,
        //       blocks: [features, testimonials, imageGrid],
        //     },
        //   ],
        // },
      ],
    },
  ],
}
