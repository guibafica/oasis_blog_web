import { render, screen } from '@testing-library/react'

import { CategoryTitleAndLink } from '.'

describe('<CategoryTitleAndLink />', () => {
  it('should render the heading', () => {
    const { container } = render(<CategoryTitleAndLink />)

    expect(
      screen.getByRole('heading', { name: /CategoryTitleAndLink/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
