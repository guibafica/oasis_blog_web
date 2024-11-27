import { Meta, StoryFn } from '@storybook/react'

import { FormBoxWithButton } from '.'

export default {
  title: 'FormBoxWithButton',
  component: FormBoxWithButton
} as Meta

export const Default: StoryFn = () => (
  <FormBoxWithButton buttonText="Inscrever-se" />
)

Default.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
