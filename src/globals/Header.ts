import type { GlobalConfig } from 'payload'

import { Link } from '../fields/Link'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      maxRows: 6,
      fields: [
        Link(true),
      ],
    },
  ],
}
