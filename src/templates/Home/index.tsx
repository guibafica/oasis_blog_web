import { Container } from '../../app/components/Container'
import { Navbar } from '../../app/components/Navbar'
import { Footer } from '../../app/components/Footer'

export function Home() {
  return (
    <>
      <section className="bg-light_gray_1">
        <Navbar />

        <Container>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
        </Container>
      </section>

      <section className="bg-light_gray_2">
        <Container>
          <Footer />
        </Container>
      </section>
    </>
  )
}
