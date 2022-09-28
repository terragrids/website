import Image from 'next/image'
import { strings } from '../../strings/en'
import ParagraphMaker from './paragraph-maker'
import styles from './splash.module.scss'

export default function Splash() {
    return (
        <header className={styles.container}>
            <div className={styles.text}>
                <h1><ParagraphMaker text={strings.splashTitle} /></h1>
                <h2>{strings.splashDescription}</h2>
            </div>
            <div className={styles.splashImage}>
                <Image
                    priority
                    src={'/images/splash.png'}
                    className={styles.splashImage}
                    layout={'fill'}
                    objectFit={'cover'}
                    objectPosition={'center 20%'}
                    alt={'splash image'} />
            </div>
        </header>
    )
}
