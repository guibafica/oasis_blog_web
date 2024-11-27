import { render, screen } from '@testing-library/react'

import { CategoryTitleAndLink } from '.'

describe('<CategoryTitleAndLink />', () => {
  it('should render the category title and link', () => {
    render(
      <CategoryTitleAndLink
        CategoryTitle="Desenvolvimento Mobile"
        LinkTitle="Ver Todos Artigos"
      />
    )

    expect(screen.getByText(/Desenvolvimento Mobile/i)).toBeInTheDocument()

    expect(screen.getByText(/Ver Todos Artigos/i)).toBeInTheDocument()
  })

  it('should render the chevron right image', () => {
    render(
      <CategoryTitleAndLink
        CategoryTitle="Desenvolvimento Mobile"
        LinkTitle="Ver Todos Artigos"
      />
    )

    const chevronRight = screen.getByAltText(/Chevron right Svg/i)

    expect(chevronRight).toBeInTheDocument()
  })
})
