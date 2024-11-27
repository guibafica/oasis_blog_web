import { Meta, StoryFn } from '@storybook/react'

import { Navbar } from '.'

export default {
  title: 'Navbar',
  component: Navbar
} as Meta

export const Default: StoryFn = () => <Navbar />

Default.parameters = {
  layout: 'fullscreen'
}
