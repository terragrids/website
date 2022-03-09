import Image from 'next/image'
import { strings } from '../../strings/en'
import ParagraphMaker from './paragraph-maker'
import styles from './splash.module.scss'

export default function Splash() {
    return (
        <div className={styles.splash}>
            <Image
                priority
                src="/images/splash.jpg"
                className={styles.splashImage}
                layout={'fill'}
                objectFit={'cover'}
                objectPosition={'center 20%'}
                alt={'splash image'} />
            <div className={styles.splashText}>
                <h1><ParagraphMaker text={strings.splashTitle} /></h1>
                <h2>{strings.splashDescription}</h2>
            </div>
        </div>
    )
}