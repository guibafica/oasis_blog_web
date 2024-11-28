import Image from 'next/image'

import { Typography } from '../Typography'
import { Logo } from '../Logo'

export function Footer() {
  const footerMenu = [
    {
      title: 'CATEGORIAS',
      options: ['CSS', 'Javascript', 'Tailwind', 'React JS']
    },
    {
      title: 'ENTRE EM CONTATO',
      options: ['+55 11 9XXX-XXX-XX', 'testeoasis@gmail.com']
    },
    {
      title: 'SIGA-NOS',
      options: ['Instagram', 'Twitter', 'facebook']
    }
  ]

  return (
    <div className="overflow-hidden">
      <footer className="w-full bg-light_gray_2 flex items-center justify-center py-16">
        <div className="gap-10 w-full h-full flex flex-col items-center justify-center">
          <div className="w-full flex flex-col md:flex-row px-5 md:px-0 md:items-start items-center justify-between">
            <div className="flex flex-col gap-5">
              <Logo />

              <Typography className="w-auto md:w-72" variant="paragraph_2">
                Conectando você às últimas novidades e tendências. 🌐
              </Typography>

              <div className="-mt-3 md:mt-0 flex gap-8">
                <Image
                  aria-label="twitter"
                  width={22}
                  height={18}
                  alt="Twitter Svg"
                  src="/twitter.svg"
                />

                <Image
                  aria-label="instagram"
                  width={24}
                  height={24}
                  alt="Instagram Svg"
                  src="/instagram.svg"
                />

                <Image
                  aria-label="linkedin"
                  width={24}
                  height={24}
                  alt="Linkedin Svg"
                  src="/linkedin.svg"
                />
              </div>
            </div>

            <div className="md:1/3 flex flex-col items-center mt-10 md:flex-row md:items-start md:mt-0 gap-24">
              {footerMenu.map((col) => (
                <div
                  key={col.title}
                  className="flex flex-col items-center md:items-start gap-5"
                >
                  <Typography className="mb-[5px]" variant="sub_heading_2">
                    {col.title}
                  </Typography>

                  {col.options.map((option) => (
                    <Typography key={option} variant="paragraph_2">
                      {option}
                    </Typography>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full h-[1px] bg-gray" />

          <Typography className="w-2/3 text-center" variant="paragraph_4">
            © 2024 OASIS PAY TESTE DESENVOLVEDOR
          </Typography>
        </div>
      </footer>
    </div>
  )
}
