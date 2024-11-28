import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import Head from 'next/head'

import '../app/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>OASIS Blog</title>
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <meta
          name="description"
          content="Conectando você às últimas novidades e tendências."
        />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppInitialProps> => {
  const ctx = await App.getInitialProps(context)

  return { ...ctx }
}
