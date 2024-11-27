import { fireEvent, render, screen } from '@testing-library/react'

import { Navbar } from '.'

describe('<Navbar />', () => {
  it('should render the navbar', () => {
    render(<Navbar />)

    expect(screen.getByLabelText(/abrir menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/buscar/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /oasis/i })).toBeInTheDocument()
  })

  it('should open/close the mobile menu', () => {
    render(<Navbar />)

    const navbarMenuElement = screen.getByRole('navigation', { hidden: true })

    expect(navbarMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(navbarMenuElement).toHaveClass('opacity-0')

    fireEvent.click(screen.getByLabelText(/abrir menu/i))
    expect(navbarMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(navbarMenuElement).toHaveClass('opacity-100')

    fireEvent.click(screen.getByLabelText(/fechar menu/i))
    expect(navbarMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(navbarMenuElement).toHaveClass('opacity-0')
  })
})
