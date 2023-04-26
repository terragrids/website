import Head from 'next/head'
import { strings } from '../strings/en'
import Splash from './components/splash'
import Layout from './components/layout'
import Mission from './components/mission'
import Strategy from './components/strategy'
import Roadmap from './components/roadmap'
import Team from './components/team'

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{strings.siteTitle}</title>
            </Head>
            <Splash />
            <Mission />
            <Strategy />
            <Roadmap />
            <Team />
        </Layout>
    )
}
