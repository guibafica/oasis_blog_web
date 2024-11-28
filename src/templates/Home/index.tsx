'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { Container } from '../../app/components/Container'
import { Navbar } from '../../app/components/Navbar'
import { Footer } from '../../app/components/Footer'
import { Typography } from '../../app/components/Typography'
import { FormBoxWithButton } from '../../app/components/FormBoxWithButton'
import { CategoryTitleAndLink } from '../../app/components/CategoryTitleAndLink'
import { ArticleCard, IArticleCard } from '../../app/components/ArticleCard'
import { Button } from '../../app/components/Button'
import {
  ICategoryCardProps,
  CategoryCard
} from '../../app/components/CategoryCard'

export type IHomeTemplateProps = {
  categories: ICategoryCardProps[]
  featured: IArticleCard[]
}

export function Home({ categories, featured }: IHomeTemplateProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  }, [])

  return (
    <>
      <section className="bg-light_gray_1 overflow-hidden">
        <Navbar />

        <Container id="home" className="bg-light_gray_1 mt-20 w-screen">
          <div className="relative w-full h-auto mt-4 gap-4 lg:gap-0 lg:mt-0 lg:h-[calc(100vh-100px)] flex flex-col-reverse lg:flex-row items-center justify-between">
            <div
              data-aos="zoom-out-right"
              className="w-full  lg:w-3/5 flex items-center lg:items-start flex-col"
            >
              <Typography variant="heading_1">Olá, Sou Bafica</Typography>
              <Typography variant="heading_1">Front end dev</Typography>

              <div className=" mt-8 border-l-[3px] border-black pl-3">
                <Typography variant="paragraph_1" color="dark_gray">
                  Neste blog compartilho dicas e truques, frameworks, projetos,
                  etc. Certifique-se de inscrever-se para receber atualizações
                  recentes
                </Typography>
              </div>

              <FormBoxWithButton
                className="mt-8 self-start lg:self-auto w-full"
                buttonText="Inscrever-Se"
              />
            </div>

            <Image
              data-aos="zoom-out-left"
              width={434}
              height={363}
              alt="Home illustration"
              src="/home-illustration.svg"
            />

            <Image
              className="absolute left-1/2 -translate-x-1/2 -bottom-14 lg:bottom-0 animate-bounce"
              width={24}
              height={24}
              alt="Chevron down illustration"
              src="/chevron-down.svg"
            />
          </div>
        </Container>

        <Container id="categories" className="bg-light_gray_1 py-16">
          <CategoryTitleAndLink
            CategoryTitle="Navegue Pela Categoria"
            LinkTitle="Ver Todas Categorias"
          />

          <section className="flex flex-wrap justify-center sm:justify-between mt-12 gap-4">
            {categories?.map((category, categoryIndex) => (
              <div
                key={`${categoryIndex} - ${category?.text}`}
                data-aos="zoom-in"
                data-aos-offset="0"
                data-aos-delay={(categoryIndex + 1) * 150}
              >
                <CategoryCard
                  iconPath={category?.iconPath}
                  text={category?.text}
                  variant={category?.variant}
                  hrefSection={category?.hrefSection}
                />
              </div>
            ))}
          </section>
        </Container>

        {/* Artigos */}
        <div className="flex flex-col gap-20 bg-white">
          <Container className="pt-20">
            <CategoryTitleAndLink
              CategoryTitle="Artigos Em Destaque"
              LinkTitle="Ver Todos Artigos"
            />

            <section className="flex flex-wrap justify-center sm:justify-between mt-8 gap-4 xl:gap-0">
              {featured?.map((featuredItem, featuredItemIndex) => (
                <ArticleCard
                  key={`${featuredItemIndex} - ${featuredItem?.topic}`}
                  created_at={featuredItem?.created_at}
                  creatorImageUrl={featuredItem?.creatorImageUrl}
                  creatorName={featuredItem?.creatorName}
                  topic={featuredItem?.topic}
                  topicImageUrl={featuredItem?.topicImageUrl}
                />
              ))}
            </section>
          </Container>

          <Container id="css">
            <CategoryTitleAndLink
              CategoryTitle="CSS"
              LinkTitle="Ver Todos Artigos"
            />

            <section className="flex flex-wrap justify-center sm:justify-between mt-8 gap-4 xl:gap-0">
              {featured?.map((featuredItem, featuredItemIndex) => (
                <ArticleCard
                  key={`${featuredItemIndex} - ${featuredItem?.topic}`}
                  created_at={featuredItem?.created_at}
                  creatorImageUrl={featuredItem?.creatorImageUrl}
                  creatorName={featuredItem?.creatorName}
                  topic={featuredItem?.topic}
                  topicImageUrl={featuredItem?.topicImageUrl}
                />
              ))}
            </section>
          </Container>

          <Container id="javascript">
            <CategoryTitleAndLink
              CategoryTitle="Javascript"
              LinkTitle="Ver Todos Artigos"
            />

            <section className="flex flex-wrap justify-center sm:justify-between mt-8 gap-4 xl:gap-0">
              {featured?.map((featuredItem, featuredItemIndex) => (
                <ArticleCard
                  key={`${featuredItemIndex} - ${featuredItem?.topic}`}
                  created_at={featuredItem?.created_at}
                  creatorImageUrl={featuredItem?.creatorImageUrl}
                  creatorName={featuredItem?.creatorName}
                  topic={featuredItem?.topic}
                  topicImageUrl={featuredItem?.topicImageUrl}
                />
              ))}
            </section>
          </Container>

          <Container id="reactjs">
            <CategoryTitleAndLink
              CategoryTitle="ReactJS"
              LinkTitle="Ver Todos Artigos"
            />

            <section className="flex flex-wrap justify-center sm:justify-between mt-8 gap-4 xl:gap-0">
              {featured?.map((featuredItem, featuredItemIndex) => (
                <ArticleCard
                  key={`${featuredItemIndex} - ${featuredItem?.topic}`}
                  created_at={featuredItem?.created_at}
                  creatorImageUrl={featuredItem?.creatorImageUrl}
                  creatorName={featuredItem?.creatorName}
                  topic={featuredItem?.topic}
                  topicImageUrl={featuredItem?.topicImageUrl}
                />
              ))}
            </section>
          </Container>

          <div className="self-center mb-20">
            <Button>Mais Artigos</Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Container className="bg-light_gray_1 py-14">
        <div className="flex flex-col items-center justify-center">
          <Image
            width={130}
            height={130}
            alt="Mail box svg"
            src="/mail-box.svg"
          />

          <Typography className="mt-8" variant="sub_heading_2">
            Inscreva-se Para Receber Últimas Atualizações
          </Typography>

          <Typography className="mt-2" color="gray" variant="paragraph_1">
            Subscribe to newsletter and never miss the new post every week.
          </Typography>

          <FormBoxWithButton
            className="w-full md:w-auto mt-8"
            buttonText="Inscrever-se"
          />
        </div>
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
