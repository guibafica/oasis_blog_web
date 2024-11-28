import { render, screen } from '@testing-library/react'

import { allArticles } from '../../app/components/ArticleCard/mock'

import { AllArticle } from '.'

describe('<AllArticle />', () => {
  it('should render navbar and footer', () => {
    render(<AllArticle allArticles={allArticles} />)

    // Navbar
    expect(screen.getByLabelText(/abrir menu/i)).toBeInTheDocument()

    // Footer
    const footerText = screen.getByText(
      /Conectando você às últimas novidades e tendências/i
    )
    expect(footerText).toBeInTheDocument()
  })

  it('should render cards', () => {
    render(<AllArticle allArticles={allArticles} />)

    // All cards
    expect(screen.getAllByText(/css/i)).toHaveLength(4)
  })
})
