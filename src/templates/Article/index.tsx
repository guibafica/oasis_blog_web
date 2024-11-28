import Image from 'next/image'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'

import { Navbar } from '../../app/components/Navbar'
import { Container } from '../../app/components/Container'
import { Footer } from '../../app/components/Footer'
import { Newsletter } from '../../app/components/Newsletter'
import { Typography } from '../../app/components/Typography'

export function Article() {
  const temp_title =
    'O impacto da tecnologia no local de trabalho: como a tecnologia está mudando'

  const texts = [
    {
      title: 'Embale com leveza e inteligência',
      content:
        'Fazer as malas pode ser uma tarefa difícil, mas com um planejamento cuidadoso e escolhas inteligentes, você pode fazer as malas de maneira leve e eficiente. Comece fazendo uma lista de embalagem e cumprindo-a, concentrando-se em roupas versáteis e confortáveis ​​que possam ser misturadas e combinadas. Invista em organizadores de bagagem e embalagem de qualidade para maximizar o espaço e minimizar rugas.'
    },
    {
      title: 'Fique seguro e saudável',
      content:
        'Viajar pode expô-lo a novos ambientes e potenciais riscos para a saúde, por isso é crucial tomar precauções para se manter seguro e saudável. Isso inclui pesquisar quaisquer vacinas ou medicamentos necessários, manter-se hidratado, lavar as mãos com frequência e usar protetor solar e repelente de insetos. Também é essencial manter seus objetos de valor seguros e protegidos e estar sempre atento ao que está ao seu redor.'
    },
    {
      title: 'Mergulhe na cultura local',
      content:
        'Um dos aspectos mais gratificantes de viajar é mergulhar na cultura e nos costumes locais. Isso inclui experimentar a culinária local, participar de eventos e festivais culturais e interagir com os habitantes locais. Aprender algumas frases no idioma local também pode ajudar muito a estabelecer conexões e demonstrar respeito.'
    },
    {
      title: 'Capturar memórias',
      content:
        'Por fim, não se esqueça de capturar memórias de sua viagem. Seja por meio de fotografias, diários ou lembranças, preservar os momentos e experiências de suas viagens pode trazer alegria e nostalgia nos próximos anos. No entanto, também é essencial estar presente no momento e não permitir que a tecnologia o distraia da beleza do ambiente.'
    },
    {
      title: 'Conclusão:',
      content:
        'Viajar é uma forma de arte que requer uma mistura de planejamento, preparação e espontaneidade. Seguindo essas dicas e truques, você poderá aproveitar ao máximo sua viagem e criar memórias que durarão a vida toda. Então faça as malas, embarque na aventura e aproveite o passeio.'
    }
  ]

  return (
    <>
      <section className="bg-light_gray_1 overflow-hidden">
        <Navbar />

        <Container className="pt-12 pb-16 mt-20 bg-white w-screen">
          <div className="w-full flex flex-col items-start justify-start">
            <div className="w-full mt-4 flex flex-col items-center justify-start">
              <div className="w-full md:w-[55%]">
                <div className="bg-yellow w-24 py-[6px] flex items-center justify-center rounded-md text-white text-sm font-normal">
                  Tecnologia
                </div>

                <Typography
                  className="text-4xl mt-4"
                  variant="paragraph_3_semi_bold"
                >
                  {temp_title}
                </Typography>

                <div className="mt-5 flex flex-row items-center justify-start">
                  <Image
                    width={28}
                    height={28}
                    alt="User pic"
                    src="/user-pic.svg"
                  />

                  <Typography className="ml-2" variant="paragraph_4">
                    Tracey Wilson
                  </Typography>

                  <Typography
                    className="ml-6 text-[#696A75]"
                    variant="paragraph_4"
                  >
                    {dayjs(new Date('2024-11-25T14:20:00Z')).format(
                      'DD [de] MMMM, YYYY'
                    )}
                  </Typography>
                </div>

                <Image
                  width={800}
                  height={462}
                  className="rounded-xl mt-8"
                  alt="Blog post image one"
                  src="https://www.monitoratec.com.br/blog/wp-content/uploads/2021/06/AdobeStock_310079315-min.jpeg"
                />

                <Typography
                  className="font-merriweather text-lg font-normal mt-8 text-[#3b3c4a]"
                  variant="paragraph_4"
                >
                  Viajar é uma experiência enriquecedora que abre novos
                  horizontes, nos expõe a diferentes culturas e cria memórias
                  que duram a vida toda. No entanto, viajar também pode ser
                  estressante e cansativo, especialmente se você não planejar e
                  se preparar adequadamente. Neste artigo do blog, exploraremos
                  dicas e truques para uma viagem memorável e como aproveitar ao
                  máximo suas viagens.
                </Typography>

                <Typography
                  className="font-merriweather text-lg font-normal mt-8 text-[#3b3c4a]"
                  variant="paragraph_4"
                >
                  Um dos aspectos mais gratificantes de viajar é mergulhar na
                  cultura e nos costumes locais. Isso inclui experimentar a
                  culinária local, participar de eventos e festivais culturais e
                  interagir com os habitantes locais. Aprender algumas frases no
                  idioma local também pode ajudar muito a estabelecer conexões e
                  demonstrar respeito.
                </Typography>

                <Typography
                  className="font-workSans text-xl font-semibold mt-8 text-[#181A2A]"
                  variant="paragraph_4"
                >
                  Pesquise o seu destino
                </Typography>

                <Typography
                  className="font-merriweather text-lg font-normal mt-4 text-[#3b3c4a]"
                  variant="paragraph_4"
                >
                  Antes de embarcar em sua viagem, reserve um tempo para
                  pesquisar seu destino. Isso inclui compreender a cultura, os
                  costumes e as leis locais, bem como identificar as principais
                  atrações, restaurantes e acomodações. Isso o ajudará a navegar
                  pelo seu destino com confiança e a evitar qualquer gafe
                  cultural.
                </Typography>

                <Typography
                  className="font-merriweather text-lg font-normal mt-8 text-[#3b3c4a]"
                  variant="paragraph_4"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incidente ut labore et dolore magna aliqua.
                  In hendrerit gravida rutrum quisque non Tellus orci ac auctor.
                  Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet.
                  Aenean euismod elementum nisi quis eleifend quam adipiscing
                  vitae. Viverra adipiscing em Tellus.
                </Typography>

                <Typography
                  className="font-workSans text-xl font-semibold mt-8 text-[#181A2A]"
                  variant="paragraph_4"
                >
                  Planeje seu itinerário
                </Typography>

                <Typography
                  className="font-merriweather text-lg font-normal mt-4 text-[#3b3c4a]"
                  variant="paragraph_4"
                >
                  Embora seja essencial deixar espaço para a espontaneidade e
                  aventuras inesperadas, ter um itinerário aproximado pode
                  ajudá-lo a aproveitar ao máximo seu tempo e orçamento.
                  Identifique os pontos turísticos e experiências imperdíveis e
                  priorize-os de acordo com seus interesses e preferências. Isso
                  o ajudará a evitar agendamentos excessivos e garantirá que
                  você tenha tempo para relaxar e aproveitar sua viagem.
                </Typography>

                <Typography
                  className="font-merriweather text-lg font-normal mt-8 text-[#3b3c4a]"
                  variant="paragraph_4"
                >
                  Vitae sapien pellentesque habitante morbi tristique. Luctus
                  venenatis lectus magna fringilla. Nec ullamcorper sit amet
                  risus nullam eget felis. Tincidunt arcu non sodales neque
                  sodales ut etiam sit amet.
                </Typography>

                <div className="p-8 bg-[#F6F6F7] rounded-xl mt-8 border-l-4 border-[#e8e8e8]">
                  <Typography
                    className="font-merriweather text-xl font-normal italic text-[#181A2A]"
                    variant="paragraph_4"
                  >
                    “ Viajar pode expô-lo a novos ambientes e potenciais riscos
                    para a saúde, por isso é crucial tomar precauções para se
                    manter seguro e saudável. ”
                  </Typography>
                </div>

                <Image
                  width={800}
                  height={462}
                  className="rounded-xl mt-8"
                  alt="Blog post image two"
                  src="https://blog.bagaggio.com.br/wp-content/uploads/2022/03/Bagaggio-no-Galeao-por-Jannu-122-1200x800.jpg"
                />

                {texts.map((text, textIndex) => (
                  <div key={`${textIndex} - ${text}`}>
                    <Typography
                      className="font-workSans text-xl font-semibold mt-8 text-[#181A2A]"
                      variant="paragraph_4"
                    >
                      {text?.title}
                    </Typography>

                    <Typography
                      className="font-merriweather text-lg font-normal mt-4 text-[#3b3c4a]"
                      variant="paragraph_4"
                    >
                      {text?.content}
                    </Typography>
                  </div>
                ))}
              </div>
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
