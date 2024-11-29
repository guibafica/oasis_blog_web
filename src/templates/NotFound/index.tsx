'use client'
import { Container } from '../../app/components/Container'
import { Navbar } from '../../app/components/Navbar'
import { Footer } from '../../app/components/Footer'
import { Newsletter } from '../../app/components/Newsletter'

export function NotFound() {
  return (
    <>
      <section className="bg-light_gray_1 overflow-hidden">
        <Navbar />

        <Container className=" bg-light_gray_1 mt-20 w-screen">
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
        </Container>
      </section>

      {/* Newsletter */}
      <Container className="bg-light_gray_1 py-14">
        <Newsletter />
      </Container>

      <section id="contact" className="bg-light_gray_2">
        <div data-aos="zoom-in">
          <Container>
            <Footer />
          </Container>
        </div>
      </section>
    </>
  )
}
