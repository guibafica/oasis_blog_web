import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { useRouter } from 'next/router'

import { Navbar } from '../../app/components/Navbar'
import { Container } from '../../app/components/Container'
import { Footer } from '../../app/components/Footer'
import { Typography } from '../../app/components/Typography'
import { Button } from '../../app/components/Button'
import { Newsletter } from '../../app/components/Newsletter'
import { ArticleCard, IArticleCard } from '../../app/components/ArticleCard'

export type IArticleTemplateProps = {
  allArticles: IArticleCard[]
}

export function AllArticle({ allArticles }: IArticleTemplateProps) {
  const [searchInput, setSearchInput] = useState('')

  const router = useRouter()

  const filteredBySearch =
    searchInput.length > 0
      ? allArticles.filter((item) =>
          item.topic.toLowerCase().includes(searchInput.toLocaleLowerCase())
        )
      : allArticles

  return (
    <>
      <section className="bg-light_gray_1 overflow-hidden">
        <Navbar onChangeText={(e) => setSearchInput(e)} />

        <Container className="pt-12 pb-16 mt-20 bg-white w-screen">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full md:w-2/3">
              <Typography
                className="text-base text-center"
                variant="sub_heading_2"
              >
                NOSSOS BLOGS
              </Typography>

              <Typography
                className="text-[48px] text-center "
                variant="heading_1"
              >
                {`Encontre todos os nossos blogs para a categoria "${router?.query?.slug}"`}
              </Typography>

              <Typography
                className="text-base text-center mt-1"
                variant="paragraph_4"
              >
                nossos blogs são escritos a partir de muitas pesquisas e
                escritores conhecidos, para que possamos fornecer a você os
                melhores blogs e artigos para você lê-los o tempo todo
              </Typography>
            </div>

            <section
              className={twMerge(
                'flex flex-wrap justify-center sm:justify-between mt-8 gap-4 xl:gap-0',
                searchInput.length > 0 && 'sm:justify-start'
              )}
            >
              {filteredBySearch?.map((item, itemIndex) => (
                <ArticleCard
                  key={`${itemIndex} - ${item?.topic}`}
                  created_at={item?.created_at}
                  creatorImageUrl={item?.creatorImageUrl}
                  creatorName={item?.creatorName}
                  topic={item?.topic}
                  topicImageUrl={item?.topicImageUrl}
                />
              ))}

              {filteredBySearch?.length === 0 && (
                <Typography variant="paragraph_4">
                  Nenhum item encontrado, tente limpar sua busca
                </Typography>
              )}
            </section>

            <Button className="mt-20">Mais Artigos</Button>
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
