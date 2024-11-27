import { render, screen, fireEvent } from '@testing-library/react'

import { Button } from '.'

describe('<Button />', () => {
  it('should render the button', () => {
    render(<Button>CLICK ME</Button>)

    expect(
      screen.getByRole('button', { name: /CLICK ME/i })
    ).toBeInTheDocument()
  })

  it('should handle click event', () => {
    const onClick = jest.fn()

    render(<Button onClick={onClick}>CLICK ME</Button>)

    fireEvent.click(screen.getByRole('button', { name: /CLICK ME/i }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should not trigger click event when disabled', () => {
    const onClick = jest.fn()

    render(
      <Button onClick={onClick} isDisabled>
        Disabled button
      </Button>
    )

    fireEvent.click(screen.getByRole('button', { name: /Disabled button/i }))

    expect(onClick).not.toHaveBeenCalled()
  })

  it('should have disabled styles when isDisabled is true', () => {
    render(<Button isDisabled>Disabled button</Button>)

    const button = screen.getByRole('button', { name: /Disabled button/i })

    expect(button).toHaveClass(
      'cursor-not-allowed border-disabled_border bg-disabled_background text-disabled_text hover:border-disabled_border hover:bg-disabled_background hover:shadow-none'
    )
  })

  it('should show loading when isLoading is true', () => {
    render(<Button isLoading>Loading...</Button>)

    const button = screen.getByRole('button', { name: /Loading.../i })

    expect(button).toHaveAttribute('data-isLoading', 'true')
    expect(button).toHaveClass('data-[isLoading=true]:cursor-progress')
  })

  it('should not trigger click event when loading', () => {
    const onClick = jest.fn()

    render(
      <Button onClick={onClick} isLoading>
        Loading...
      </Button>
    )

    fireEvent.click(screen.getByRole('button', { name: /Loading.../i }))

    expect(onClick).not.toHaveBeenCalled()
  })
})
