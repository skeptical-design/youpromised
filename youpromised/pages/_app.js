import { ApolloProvider } from '@apollo/react-hooks'
import { useApollo } from '../apollo/client'
import Head from 'next/head';
import { GlobalStyles } from './ui/GlobalStyles'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <>
    <Head>
      <title>you promised.</title>
      <link href="https://fonts.googleapis.com/css2?family=Dosis&display=swap" rel="stylesheet"></link>
      <link rel="icon" type="image/png" href="pages/ui/img/favicon.png"/>
    </Head>
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={{}}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
    </>
  )
}
