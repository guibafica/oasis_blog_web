import { render, screen } from '@testing-library/react'

import { Input } from '.'

describe('<Input />', () => {
  it('should render the input', () => {
    render(<Input title="Nome" />)

    const title = screen.getByText(/Nome/i)
    expect(title).toBeInTheDocument()

    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })
})
