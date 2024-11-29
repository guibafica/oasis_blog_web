import { Meta, StoryFn } from '@storybook/react'

import { Input } from '.'

export default {
  title: 'Input',
  component: Input
} as Meta

export const Default: StoryFn = () => <Input title="Nome" />
