import { Home, IHomeTemplateProps } from '@/templates/Home'

import { items } from '@/app/components/CategoryCard/mock'
import {
  featured,
  css,
  javascript,
  reactjs
} from '@/app/components/ArticleCard/mock'

import { client } from '@/services/api-graphql'

import { GET_LOCATIONS } from '@/graphql/locations/locationsQueries'

export default function Index(props: IHomeTemplateProps) {
  return <Home {...props} />
}

export async function getServerSideProps() {
  // SSR exemplo de implementação graphql.
  // Em um ambiente real, basta alterar para o backend do projeto, e enviar esses dados
  // para a pagina através das pros.
  const { data } = await client.query({
    query: GET_LOCATIONS
  })

  console.log('LOCATIONS: ', data)

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
