import { Meta, StoryFn } from '@storybook/react'

import { Newsletter } from '.'

export default {
  title: 'Newsletter',
  component: Newsletter
} as Meta

export const Default: StoryFn = () => <Newsletter />
