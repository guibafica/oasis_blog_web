import { Meta, StoryFn } from '@storybook/react'

import { Button, IButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryFn<IButtonProps> = (args) => (
  <Button {...args}>CLICK ME</Button>
)

export const Disabled: StoryFn<IButtonProps> = (args) => (
  <Button {...args} isDisabled>
    Desabilitado
  </Button>
)
