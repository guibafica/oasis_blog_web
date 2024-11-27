import { render, screen } from '@testing-library/react'

import { Button } from '.'

describe('<Button />', () => {
  it('should render the button', () => {
    render(<Button>CLICK ME</Button>)

    expect(
      screen.getByRole('button', { name: /CLICK ME/i })
    ).toBeInTheDocument()
  })
})
