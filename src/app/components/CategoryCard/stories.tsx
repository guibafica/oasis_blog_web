import { Meta, StoryFn } from '@storybook/react'

import { CategoryCard } from '.'

export default {
  title: 'CategoryCard',
  component: CategoryCard
} as Meta

export const Default: StoryFn = () => (
  <CategoryCard text="CSS" iconPath="/css.svg" variant="yellow" />
)

export const White: StoryFn = () => (
  <CategoryCard text="React JS" iconPath="/react-js.svg" variant="white" />
)

Default.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

White.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
