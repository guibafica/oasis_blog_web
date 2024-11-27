import { render, screen } from '@testing-library/react'

import { ArticleCard, IArticleCard } from '.'

describe('<ArticleCard />', () => {
  const articleData: IArticleCard = {
    topic: 'Como fazer GUI em Java com exemplo de exemplo',
    topicImageUrl:
      'https://www.sketchappsources.com/resources/source-image/danielkorpai_article_card.png',
    creatorImageUrl:
      'https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp',
    creatorName: 'John Doe',
    created_at: new Date('2024-11-27T18:35:00Z')
  }

  it('should render the whole article topic', () => {
    render(<ArticleCard {...articleData} />)

    expect(
      screen.getByRole('img', { name: /Article Image/i })
    ).toBeInTheDocument()
    expect(screen.getByText(articleData.topic)).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /Topic Creator Image/i })
    ).toBeInTheDocument()
    expect(screen.getByText(articleData.creatorName)).toBeInTheDocument()

    const formattedDate = 'nov 27, 2024'
    expect(screen.getByText(formattedDate)).toBeInTheDocument()
  })
})
