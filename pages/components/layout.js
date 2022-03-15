import Head from 'next/head'
import styles from './layout.module.scss'
import Logo from '../../public/images/logo+name.svg'
import { strings } from '../../strings/en'
import Footer from './footer'
import TopMenu from './top-menu'
import { Link as SmoothScrollLink } from 'react-scroll'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <link rel={'icon'} href={'/favicon.ico'} />
                <meta
                    name={'description'}
                    content={`${strings.splashTitle}. ${strings.splashDescription}`} />
                <meta name={'og:title'} content={strings.siteTitle} />
                <meta
                    property={'og:image'}
                    content={''} />
                <meta name={'twitter:card'} content={'summary_large_image'} />
            </Head>
            <header className={styles.navbar}>
                <div className={styles.navContent}>
                    <SmoothScrollLink to={'top'} smooth>
                        <Logo className={styles.logo} />
                    </SmoothScrollLink>
                    <TopMenu />
                </div>
            </header>
            <a id={'top'} />
            <main className={styles.content}>{children}</main>
            <Footer />
        </>
    )
}