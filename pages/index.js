import Head from 'next/head'
import { strings } from '../strings/en'
import Splash from './components/splash'
import Layout from './components/layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{strings.siteTitle}</title>
      </Head>
      <Splash />
    </Layout>
  )
}
