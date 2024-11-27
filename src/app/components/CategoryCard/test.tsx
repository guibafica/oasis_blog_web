import { render, screen } from '@testing-library/react'

import { CategoryCard, ICategoryCardProps } from '.'

describe('<CategoryCard />', () => {
  const defaultProps: ICategoryCardProps = {
    variant: 'yellow',
    text: 'CSS',
    iconPath: '/css.svg'
  }

  it('should render the category card', () => {
    render(<CategoryCard {...defaultProps} />)

    expect(screen.getByRole('img', { name: /Icon Svg/i })).toBeInTheDocument()
    expect(screen.getByText(defaultProps.text)).toBeInTheDocument()
  })

  it('should apply white variant', () => {
    const { container } = render(
      <CategoryCard {...defaultProps} variant="white" />
    )

    expect(container.firstChild).toHaveClass('bg-white')
    expect(screen.getByText(defaultProps.text)).toHaveClass('text-black')
  })
})
