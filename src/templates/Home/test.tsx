import { render, screen } from '@testing-library/react'

import { items } from '../../app/components/CategoryCard/mock'
import { featured } from '../../app/components/ArticleCard/mock'

import { Home } from '.'

describe('<Home />', () => {
  it('should render navbar and footer', () => {
    render(<Home categories={items} featured={featured} />)

    // Navbar
    expect(screen.getByLabelText(/abrir menu/i)).toBeInTheDocument()

    // Footer
    const footerText = screen.getByText(
      /Conectando você às últimas novidades e tendências/i
    )
    expect(footerText).toBeInTheDocument()
  })

  it('should render section elements', () => {
    render(<Home categories={items} featured={featured} />)

    // Category Card
    expect(
      screen.getByRole('heading', { name: /Navegue Pela Categoria/i })
    ).toBeInTheDocument()

    // Article Card
    expect(
      screen.getByRole('heading', { name: /Artigos em destaque/i })
    ).toBeInTheDocument()

    // All cards
    expect(screen.getAllByText(/css/i)).toHaveLength(11)

    // Newsletter
    expect(
      screen.getByRole('heading', {
        name: /Subscribe to newsletter and never miss the new post every week./i
      })
    ).toBeInTheDocument()
  })
})
