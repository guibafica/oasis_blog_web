import { render, screen } from '@testing-library/react'

import { Newsletter } from '.'

describe('<Newsletter />', () => {
  it('should render the mail box image', () => {
    render(<Newsletter />)

    const image = screen.getByAltText(/Mail box svg/i)
    expect(image).toBeInTheDocument()
  })

  it('should render the main heading', () => {
    render(<Newsletter />)

    const heading = screen.getByText(
      /Inscreva-se Para Receber Últimas Atualizações/i
    )

    expect(heading).toBeInTheDocument()
  })

  it('should render the description text', () => {
    render(<Newsletter />)

    const description = screen.getByText(
      /Subscribe to newsletter and never miss the new post every week./i
    )

    expect(description).toBeInTheDocument()
  })

  it('should render the form with button', () => {
    render(<Newsletter />)

    const button = screen.getByRole('button', { name: /Inscrever-se/i })
    expect(button).toBeInTheDocument()

    const input = screen.getByPlaceholderText(/Digite seu e-mail aqui.../i)
    expect(input).toBeInTheDocument()
  })
})
