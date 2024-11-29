import Image from 'next/image'

import { Navbar } from '../../app/components/Navbar'
import { Container } from '../../app/components/Container'
import { Footer } from '../../app/components/Footer'
import { Newsletter } from '../../app/components/Newsletter'
import { Typography } from '../../app/components/Typography'
import { Input } from '../../app/components/Input'
import { Button } from '../../app/components/Button'

import mapImage from '../../../public/img/map-image.jpg'

export function Contact() {
  return (
    <>
      <section className="bg-light_gray_1 overflow-hidden">
        <Navbar />

        <Container className="pt-12 pb-16 mt-20 bg-white w-screen">
          <div className="w-full flex flex-col items-center justify-center md:mt-28">
            <Typography variant="heading_1" className="text-5xl">
              Get in Touch
            </Typography>

            <Typography
              variant="paragraph_4"
              className="font-medium text-center md:w-[30%] mt-4"
            >
              Contact us to publish your content and show ads to our website and
              get a good reach.
            </Typography>

            <div className="w-full flex flex-col md:flex-row mt-14 items-center justify-center gap-5">
              <div className="w-full md:w-96 h-60 shadow-lg rounded-2xl flex flex-col items-center justify-center">
                <div className="size-16 rounded-full flex items-center justify-center bg-yellow">
                  <svg
                    width="22"
                    height="23"
                    viewBox="0 0 22 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 19.2487V11.4227C21.0001 10.8782 20.889 10.3395 20.6735 9.83942C20.458 9.33939 20.1428 8.8886 19.747 8.51468L12.374 1.54669C12.0027 1.19561 11.511 1 11 1C10.489 1 9.99734 1.19561 9.626 1.54669L2.253 8.51468C1.85722 8.8886 1.54195 9.33939 1.3265 9.83942C1.11104 10.3395 0.999942 10.8782 1 11.4227V19.2487C1 19.7791 1.21071 20.2878 1.58579 20.6629C1.96086 21.038 2.46957 21.2487 3 21.2487H19C19.5304 21.2487 20.0391 21.038 20.4142 20.6629C20.7893 20.2878 21 19.7791 21 19.2487Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <Typography
                  variant="paragraph_1"
                  color="yellow"
                  className="font-bold text-center mt-5"
                >
                  Office
                </Typography>

                <Typography
                  variant="paragraph_3_semi_bold"
                  className="font-medium text-center mt-5 text-[#7a7a7a]"
                >
                  Victoria Street, London, UK
                </Typography>
              </div>

              <div className="w-full md:w-96 h-60 shadow-lg rounded-2xl flex flex-col items-center justify-center">
                <div className="size-16 rounded-full flex items-center justify-center bg-yellow">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V6Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 8L9.501 14.001C10.2103 14.5685 11.0916 14.8777 12 14.8777C12.9084 14.8777 13.7897 14.5685 14.499 14.001L22 8"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <Typography
                  variant="paragraph_1"
                  color="yellow"
                  className="font-bold text-center mt-5"
                >
                  Email
                </Typography>

                <Typography
                  variant="paragraph_3_semi_bold"
                  className="font-medium text-center mt-5 text-[#7a7a7a]"
                >
                  hello@zarrin.cm
                </Typography>
              </div>

              <div className="w-full md:w-96 h-60 shadow-lg rounded-2xl flex flex-col items-center justify-center">
                <div className="size-16 rounded-full flex items-center justify-center bg-yellow">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.554 6.24003L7.17099 2.33503C6.78099 1.88503 6.06599 1.88703 5.61299 2.34103L2.83099 5.12803C2.00299 5.95703 1.76599 7.18803 2.24499 8.17503C5.10661 14.1 9.88503 18.8851 15.806 21.755C16.792 22.234 18.022 21.997 18.85 21.168L21.658 18.355C22.113 17.9 22.114 17.181 21.66 16.791L17.74 13.426C17.33 13.074 16.693 13.12 16.282 13.532L14.918 14.898C14.8482 14.9712 14.7562 15.0195 14.6563 15.0354C14.5564 15.0513 14.4541 15.0339 14.365 14.986C12.1354 13.7021 10.286 11.8503 9.00499 9.61903C8.95702 9.52978 8.93964 9.42726 8.95554 9.32719C8.97144 9.22711 9.01972 9.13502 9.09299 9.06503L10.453 7.70403C10.865 7.29003 10.91 6.65003 10.554 6.23903V6.24003Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <Typography
                  variant="paragraph_1"
                  color="yellow"
                  className="font-bold text-center mt-5"
                >
                  Phone
                </Typography>

                <Typography
                  variant="paragraph_3_semi_bold"
                  className="font-medium text-center mt-5 text-[#7a7a7a]"
                >
                  (001) 2342 3451
                </Typography>
              </div>
            </div>
          </div>
        </Container>

        <div className="w-screen relative h-[547px] bg-white overflow-hidden">
          <Image fill alt="Map image Svg" src={mapImage} />
        </div>

        <Container className="pt-12 pb-16 bg-white w-screen">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="z-10 p-16 flex flex-col gap-5 w-full -mt-40 md:w-[768px] bg-[#ffffff] shadow-lg rounded-2xl">
              <div className="flex flex-col md:flex-row gap-5">
                <Input className="w-full" title="Nome" />
                <Input className="w-full" title="Email" />
              </div>

              <div className="flex flex-col md:flex-row gap-5">
                <Input className="w-full" title="Celular" />
                <Input className="w-full" title="Assunto" />
              </div>

              <Typography variant="paragraph_3_semi_bold">Mensagem</Typography>

              <textarea className="resize-none h-44 w-full p-4 outline-none bg-white border border-gray rounded-lg mt-2" />

              <Button className="w-full md:w-48 self-center mt-10">
                Enviar mensagem
              </Button>
            </div>
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
