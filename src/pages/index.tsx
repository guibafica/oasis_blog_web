import { Home, IHomeTemplateProps } from '@/templates/Home'

import { items } from '@/app/components/CategoryCard/mock'
import {
  featured,
  css,
  javascript,
  reactjs
} from '@/app/components/ArticleCard/mock'

import { initializeApollo } from '@/utils/apollo'

import { GET_LOCATIONS } from '@/graphql/locations/locationsQueries'

export default function Index(props: IHomeTemplateProps) {
  return <Home {...props} />
}

export async function getServerSideProps() {
  // SSR exemplo de implementação graphql.
  // Em um ambiente real, basta alterar para o backend do projeto, e enviar esses dados
  // para a pagina através das pros.
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: GET_LOCATIONS
  })

  console.log('LOCATIONS: ', data)

  return {
    props: {
      initialApoloState: apolloClient.cache.extract(),
      categories: items,
      featured,
      css,
      javascript,
      reactjs
    }
  }
}
