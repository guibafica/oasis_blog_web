import { Meta, StoryObj } from '@storybook/react'

import { Button } from '.'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = {
  args: {
    children: 'Enviar mensagem'
  }
}

export const Disabled: StoryObj = {
  args: {
    children: 'Desabilitado',
    isDisabled: true
  }
}
