import { Contact } from '../../templates/Contact'

export default function Index() {
  return <Contact />
}

export function getServerSideProps() {
  return {
    props: {}
  }
}
