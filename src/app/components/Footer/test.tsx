import { render, screen } from '@testing-library/react'

import { Footer } from '.'

describe('<Footer />', () => {
  it('should render the footer', () => {
    render(<Footer />)

    const footerText = screen.getByText(
      /Conectando você às últimas novidades e tendências/i
    )
    expect(footerText).toBeInTheDocument()

    const twitterIcon = screen.getByLabelText(/twitter/i)
    const instagramIcon = screen.getByLabelText(/instagram/i)
    const linkedinIcon = screen.getByLabelText(/linkedin/i)

    expect(twitterIcon).toBeInTheDocument()
    expect(instagramIcon).toBeInTheDocument()
    expect(linkedinIcon).toBeInTheDocument()
  })
})
