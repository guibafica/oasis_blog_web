import { Meta, StoryFn } from '@storybook/react'

import { CategoryTitleAndLink, ICategoryTitleAndLinkProps } from '.'

export default {
  title: 'CategoryTitleAndLink',
  component: CategoryTitleAndLink
} as Meta

export const Default: StoryFn<ICategoryTitleAndLinkProps> = (args) => (
  <CategoryTitleAndLink
    {...args}
    CategoryTitle="Desenvolvimento Mobile"
    LinkTitle="Ver Todos Artigos"
  />
)
