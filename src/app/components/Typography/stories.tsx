import { Meta, StoryFn } from '@storybook/react'

import { Typography, ITypographyProps } from '.'

export default {
  title: 'Typography',
  component: Typography
} as Meta

export const Default: StoryFn<ITypographyProps> = (args) => (
  <Typography {...args}>Heading 1</Typography>
)
