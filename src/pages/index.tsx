import { Home, IHomeTemplateProps } from '@/templates/Home'

import { items } from '@/app/components/CategoryCard/mock'
import {
  featured,
  css,
  javascript,
  reactjs
} from '@/app/components/ArticleCard/mock'

export default function Index(props: IHomeTemplateProps) {
  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      categories: items,
      featured,
      css,
      javascript,
      reactjs
    }
  }
}
