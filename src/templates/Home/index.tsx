'use client'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
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
import { Newsletter } from '../../app/components/Newsletter'
import {
  ICategoryCardProps,
  CategoryCard
} from '../../app/components/CategoryCard'

export type IHomeTemplateProps = {
  categories: ICategoryCardProps[]
  featured: IArticleCard[]
  css: IArticleCard[]
  javascript: IArticleCard[]
  reactjs: IArticleCard[]
}

type IArticles = {
  featured: IArticleCard[]
  css: IArticleCard[]
  javascript: IArticleCard[]
  reactjs: IArticleCard[]
}

export function Home({
  categories,
  featured,
  css,
  javascript,
  reactjs
}: IHomeTemplateProps) {
  const [searchInput, setSearchInput] = useState('')

  const allArticles: IArticles = {
    featured,
    css,
    javascript,
    reactjs
  }

  // Agrupo todos os dados de artigos, para filtrar igualmente de acordo
  // com o que o usuário digita
  const filteredByInputSearch = Object.fromEntries(
    Object.entries(allArticles).map(([category, items]) => [
      category,
      searchInput.length > 0
        ? items.filter((item) =>
            item.topic.toLowerCase().includes(searchInput.toLowerCase())
          )
        : items
    ])
  )

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
        <Navbar onChangeText={(e) => setSearchInput(e)} />

        <Container id="home" className=" bg-light_gray_1 mt-20 w-screen">
          <Image
            data-aos="zoom-out-left"
            className="absolute left-0 right-0 bottom-5"
            width={1342}
            height={839}
            alt="Home dots"
            src="/home-dots.svg"
          />

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

            <section
              className={twMerge(
                'flex flex-wrap justify-center sm:justify-between mt-8 gap-4 xl:gap-0',
                searchInput.length > 0 && 'sm:justify-start'
              )}
            >
              {filteredByInputSearch?.featured?.map(
                (featuredItem, featuredItemIndex) => (
                  <ArticleCard
                    key={`${featuredItemIndex} - ${featuredItem?.topic}`}
                    created_at={featuredItem?.created_at}
                    creatorImageUrl={featuredItem?.creatorImageUrl}
                    creatorName={featuredItem?.creatorName}
                    topic={featuredItem?.topic}
                    topicImageUrl={featuredItem?.topicImageUrl}
                  />
                )
              )}

              {filteredByInputSearch?.featured?.length === 0 && (
                <Typography variant="paragraph_4">
                  Nenhum item encontrado, tente limpar sua busca
                </Typography>
              )}
            </section>
          </Container>

          <Container id="css">
            <CategoryTitleAndLink
              CategoryTitle="CSS"
              LinkTitle="Ver Todos Artigos"
            />

            <section
              className={twMerge(
                'flex flex-wrap justify-center sm:justify-between mt-8 gap-4 xl:gap-0',
                searchInput.length > 0 && 'sm:justify-start'
              )}
            >
              {filteredByInputSearch?.css?.map((item, itemIndex) => (
                <ArticleCard
                  key={`${itemIndex} - ${item?.topic}`}
                  created_at={item?.created_at}
                  creatorImageUrl={item?.creatorImageUrl}
                  creatorName={item?.creatorName}
                  topic={item?.topic}
                  topicImageUrl={item?.topicImageUrl}
                />
              ))}

              {filteredByInputSearch?.css?.length === 0 && (
                <Typography variant="paragraph_4">
                  Nenhum item encontrado, tente limpar sua busca
                </Typography>
              )}
            </section>
          </Container>

          <Container id="javascript">
            <CategoryTitleAndLink
              CategoryTitle="Javascript"
              LinkTitle="Ver Todos Artigos"
            />

            <section
              className={twMerge(
                'flex flex-wrap justify-center sm:justify-between mt-8 gap-4 xl:gap-0',
                searchInput.length > 0 && 'sm:justify-start'
              )}
            >
              {filteredByInputSearch?.javascript?.map(
                (javascript, javascriptIndex) => (
                  <ArticleCard
                    key={`${javascriptIndex} - ${javascript?.topic}`}
                    created_at={javascript?.created_at}
                    creatorImageUrl={javascript?.creatorImageUrl}
                    creatorName={javascript?.creatorName}
                    topic={javascript?.topic}
                    topicImageUrl={javascript?.topicImageUrl}
                  />
                )
              )}

              {filteredByInputSearch?.javascript?.length === 0 && (
                <Typography variant="paragraph_4">
                  Nenhum item encontrado, tente limpar sua busca
                </Typography>
              )}
            </section>
          </Container>

          <Container id="reactjs">
            <CategoryTitleAndLink
              CategoryTitle="ReactJS"
              LinkTitle="Ver Todos Artigos"
            />

            <section
              className={twMerge(
                'flex flex-wrap justify-center sm:justify-between mt-8 gap-4 xl:gap-0',
                searchInput.length > 0 && 'sm:justify-start'
              )}
            >
              {filteredByInputSearch?.reactjs?.map((reactjs, reactjsIndex) => (
                <ArticleCard
                  key={`${reactjsIndex} - ${reactjs?.topic}`}
                  created_at={reactjs?.created_at}
                  creatorImageUrl={reactjs?.creatorImageUrl}
                  creatorName={reactjs?.creatorName}
                  topic={reactjs?.topic}
                  topicImageUrl={reactjs?.topicImageUrl}
                />
              ))}

              {filteredByInputSearch?.reactjs?.length === 0 && (
                <Typography variant="paragraph_4">
                  Nenhum item encontrado, tente limpar sua busca
                </Typography>
              )}
            </section>
          </Container>

          <div className="self-center mb-20">
            <Button>Mais Artigos</Button>
          </div>
        </div>
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
