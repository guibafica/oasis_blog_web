import { Meta, StoryFn } from '@storybook/react'

import { Logo, ILogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo
} as Meta

export const Default: StoryFn<ILogoProps> = (args) => <Logo {...args} />
