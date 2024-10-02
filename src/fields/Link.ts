import { Field } from 'payload'

type LinkType = (required: boolean) => Field

export const Link: LinkType = (required) => {
  return {
    name: 'link',
    type: 'group',
    fields: [
      {
        name: 'url',
        label: 'Custom URL',
        type: 'text',
        required: true,
      },
      {
        name: 'label',
        label: 'Label',
        type: 'text',
        admin: {
          width: '50%',
        },
        required
      },
    ],
  }
}
