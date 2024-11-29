import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import Head from 'next/head'

import { client } from '../services/api-graphql'

import '../app/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <Head>
          <title>OASIS Blog</title>
          <link rel="shortcut icon" href="/img/favicon.ico" />
          <meta
            name="description"
            content="Conectando você às últimas novidades e tendências."
          />

          <meta property="og:title" content="OASIS Blog" />
          <meta
            property="og:description"
            content="Conectando você às últimas novidades e tendências."
          />
          <meta property="og:image" content="/presentationImage.png" />
          <meta property="og:url" content="https://oasis-blog.vercel.app/" />
          <meta property="og:type" content="blog" />
          <meta property="og:locale" content="pt_BR" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="OASIS Blog" />
          <meta
            name="twitter:description"
            content="Conectando você às últimas novidades e tendências."
          />
          <meta name="twitter:image" content="/presentationImage.png" />
        </Head>

        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}

MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppInitialProps> => {
  const ctx = await App.getInitialProps(context)

  return { ...ctx }
}
