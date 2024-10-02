import { CollectionConfig } from 'payload';

import { RichText } from '@/fields/RichText';

export const Articles: CollectionConfig = {
  slug: 'articles',
  labels: {
    singular: 'Article',
    plural: 'Articles',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'publishDate', 'status'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    // {
    //   name: 'author',
    //   type: 'relationship',
    //   label: 'Author',
    //   relationTo: 'users', // Assuming you have a 'users' collection
    //   required: true,
    // },
    {
      name: 'publishDate',
      type: 'date',
      label: 'Publish Date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    // {
    //   name: 'categories',
    //   type: 'relationship',
    //   label: 'Categories',
    //   relationTo: 'categories',
    //   hasMany: true,
    //   required: true,
    // },
    ...RichText('content', true),
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Excerpt',
      required: true,
      admin: {
        description: 'Short summary for article listings.',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      label: 'Featured Image',
      relationTo: 'media', // Assuming you have a media collection for uploads
    },
    {
      name: 'seoTitle',
      type: 'text',
      label: 'SEO Title',
      admin: {
        description: 'Optimized title for search engines. Defaults to the main title if not provided.',
      },
    },
    {
      name: 'seoDescription',
      type: 'textarea',
      label: 'SEO Description',
      admin: {
        description: 'Meta description for search engines.',
      },
    },
    {
      name: 'tags',
      type: 'array',
      label: 'Tags',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      required: true,
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
        {
          label: 'Archived',
          value: 'archived',
        },
      ],
      defaultValue: 'draft',
    },
    {
      name: 'readTime',
      type: 'number',
      label: 'Read Time (in minutes)',
      required: false,
    },
    {
      name: 'socialMediaImage',
      type: 'upload',
      label: 'Social Media Share Image',
      relationTo: 'media', // Assuming you have a media collection
    },
  ],
};

