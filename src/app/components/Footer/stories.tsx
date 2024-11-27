import { Meta, StoryFn } from '@storybook/react'

import { Footer } from '.'

export default {
  title: 'Footer',
  component: Footer
} as Meta

export const Default: StoryFn = () => <Footer />

Default.parameters = {
  layout: 'fullscreen'
}
