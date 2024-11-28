import { Container } from '../../app/components/Container'
import { Navbar } from '../../app/components/Navbar'
import { Footer } from '../../app/components/Footer'

export function Home() {
  return (
    <section className="bg-light_gray_1">
      <Container>
        <Navbar />
        <Footer />
      </Container>
    </section>
  )
}
