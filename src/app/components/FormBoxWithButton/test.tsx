import { render, screen } from '@testing-library/react'

import { FormBoxWithButton } from '.'

describe('<FormBoxWithButton />', () => {
  const defaultProps = {
    buttonText: 'Inscrever-se',
    placeholder: 'Digite seu e-mail aqui...'
  }

  it('should render the form box with button', () => {
    render(<FormBoxWithButton {...defaultProps} />)

    const input = screen.getByPlaceholderText(defaultProps.placeholder)

    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'text')

    const button = screen.getByRole('button', { name: defaultProps.buttonText })

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(defaultProps.buttonText)
  })
})
