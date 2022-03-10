import Head from 'next/head'
import { strings } from '../strings/en'
import Splash from './components/splash'
import Layout from './components/layout'
import Mission from './components/mission'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{strings.siteTitle}</title>
      </Head>
      <Splash />
      <Mission />
    </Layout>
  )
}
