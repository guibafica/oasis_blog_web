import { render, screen } from '@testing-library/react'

import { Home } from '.'

describe('<Home />', () => {
  it('should render navbar and footer', () => {
    render(<Home />)

    expect(screen.getByLabelText(/abrir menu/i)).toBeInTheDocument()

    const footerText = screen.getByText(
      /Conectando você às últimas novidades e tendências/i
    )
    expect(footerText).toBeInTheDocument()
  })
})
