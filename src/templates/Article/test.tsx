import { render, screen } from '@testing-library/react'

import { Article } from '.'

describe('<Article />', () => {
  it('should render the navbar and footer', () => {
    render(<Article />)

    // Navbar
    expect(screen.getByLabelText(/abrir menu/i)).toBeInTheDocument()

    // Footer
    const footerText = screen.getByText(
      /Conectando você às últimas novidades e tendências/i
    )
    expect(footerText).toBeInTheDocument()
  })

  it('should render the content', () => {
    render(<Article />)

    expect(
      screen.getAllByText(
        /Viajar é uma forma de arte que requer uma mistura de planejamento, preparação e espontaneidade. Seguindo essas dicas e truques, você poderá aproveitar ao máximo sua viagem e criar memórias que durarão a vida toda. Então faça as malas, embarque na aventura e aproveite o passeio./i
      )
    )
  })
})
