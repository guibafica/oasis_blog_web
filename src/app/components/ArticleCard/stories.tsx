import { Meta, StoryFn } from '@storybook/react'

import { ArticleCard } from '.'

export default {
  title: 'ArticleCard',
  component: ArticleCard
} as Meta

export const Default: StoryFn = () => (
  <ArticleCard
    topic="Como fazer GUI em Java com exemplo de exemplo"
    topicImageUrl="https://www.sketchappsources.com/resources/source-image/danielkorpai_article_card.png"
    creatorImageUrl="https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp"
    creatorName="Dasteen"
    created_at={new Date('2024-11-27T18:35:00Z')}
  />
)

Default.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
