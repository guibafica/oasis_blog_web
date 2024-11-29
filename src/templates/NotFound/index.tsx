'use client'
import Link from 'next/link'

import { Container } from '../../app/components/Container'
import { Navbar } from '../../app/components/Navbar'
import { Footer } from '../../app/components/Footer'
import { Newsletter } from '../../app/components/Newsletter'
import { Typography } from '../../app/components/Typography'
import { Button } from '../../app/components/Button'

export function NotFound() {
  return (
    <>
      <section className="bg-light_gray_1 overflow-hidden">
        <Navbar />

        <Container className="bg-white flex items-center justify-center mt-20 h-screen w-screen">
          <div className="w-full text-center p-10 md:w-[816px] h-[472px] rounded-2xl bg-yellow flex flex-col items-center justify-center">
            <Typography variant="heading_1" className="text-9xl" color="white">
              404
            </Typography>

            <Typography
              variant="sub_heading_1"
              className="font-medium mt-8"
              color="white"
            >
              Desculpe!
            </Typography>

            <Typography
              variant="sub_heading_1"
              className="font-medium mt-2"
              color="white"
            >
              O link está quebrado, tente atualizar ou vá para o Início
            </Typography>

            <Link href="/#">
              <Button className="bg-white text-black mt-9 hover:bg-white">
                Vá para o início
              </Button>
            </Link>
          </div>
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
