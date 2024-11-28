import { AllArticle, IArticleTemplateProps } from '../../templates/AllArticle'

import { allArticles } from '../../app/components/ArticleCard/mock'

export default function Index(props: IArticleTemplateProps) {
  return <AllArticle {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      allArticles
    }
  }
}
