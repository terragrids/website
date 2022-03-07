import Head from 'next/head'
import styles from './layout.module.scss'

export const siteTitle = 'Terragrids'

export default function Layout({ children, home }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content={siteTitle} />
                <meta
                    property="og:image"
                    content={''} />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div className={styles.container}>
                <nav className={styles.navbar}>
                    <h1>terragrids</h1>
                </nav>
                <main>{children}</main>
            </div>
        </>
    )
}