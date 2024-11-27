import { render, screen } from '@testing-library/react'

import { Typography } from '.'

describe('<Typography />', () => {
  it('should render the text', () => {
    render(
      <Typography variant="paragraph_1" color="white">
        Inscreva-se
      </Typography>
    )

    expect(screen.getByText(/Inscreva-se/i)).toBeVisible()
  })

  it('should render a small white text', () => {
    render(
      <Typography variant="paragraph_4" color="white">
        Inscreva-se
      </Typography>
    )

    const element = screen.getByText(/Inscreva-se/i)

    expect(element).toHaveClass('text-sm font-normal text-white')
  })
})
