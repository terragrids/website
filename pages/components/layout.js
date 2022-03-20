import Head from 'next/head'
import styles from './layout.module.scss'
import Logo from '../../public/images/logo+name.svg'
import { strings } from '../../strings/en'
import Footer from './footer'
import TopMenu from './top-menu'
import { Link as SmoothScrollLink } from 'react-scroll'

export default function Layout({ children }) {
    const siteUrl = 'https://www.terragrids.org'
    const siteImage = 'https://terragrids.org/images/logo+name.png'

    return (
        <>
            <Head>
                <link rel={'icon'} href={'/favicon.ico'} />

                <meta name={'description'} content={`${strings.splashTitle}. ${strings.splashDescription}`} />

                <meta property={'og:url'} content={siteUrl} />
                <meta property={'og:type'} content={'website'} />
                <meta property={'og:title'} content={strings.siteTitle} />
                <meta property={'og:description'} content={`${strings.splashTitle}. ${strings.splashDescription}`} />
                <meta property={'og:image'} content={siteImage} />

                <meta name={'twitter:card'} content={'summary_large_image'} />
                <meta property={'twitter:domain'} content={'terragrids.org'} />
                <meta property={'twitter:url'} content={siteUrl} />
                <meta name={'twitter:title'} content={strings.siteTitle} />
                <meta name={'twitter:description'} content={`${strings.splashTitle}. ${strings.splashDescription}`} />
                <meta name={'twitter:image'} content={siteImage} />
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