import { Article } from '../../templates/Article'

export default function Index() {
  return <Article />
}

export function getServerSideProps() {
  return {
    props: {}
  }
}
