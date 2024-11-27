import { render, screen } from '@testing-library/react'

import { Logo } from '.'

describe('<Logo />', () => {
  it('should render the logo', () => {
    render(<Logo />)

    expect(screen.getByLabelText(/oasis/i)).toHaveStyle({
      width: '175'
    })
  })

  it('should render the logo without text', () => {
    render(<Logo hasText={false} />)

    const logo = screen.getByLabelText(/oasis/i).querySelector('.hidden')

    expect(logo).toBeInTheDocument()
  })
})
