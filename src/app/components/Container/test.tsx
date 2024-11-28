import { render } from '@testing-library/react'

import { Container } from '.'

describe('<Container />', () => {
  it('should render the container', () => {
    const { container } = render(
      <Container>
        <span>OASIS</span>
      </Container>
    )

    expect(container.firstChild).toHaveClass(
      'pl-[calc(3.2rem/2)] pr-[calc(3.2rem/2)]'
    )
  })
})
