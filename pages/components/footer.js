import Image from 'next/image'
import { strings } from '../../strings/en'
import Section from './section'
import styles from './footer.module.scss'

export default function Footer() {
    const algorandUrl = 'https://www.algorand.com/about/sustainability';
    return (
        <Section classNames={[styles.container]}>
            <div className={styles.poweredBy}>
                {strings.poweredBy}
                <div className={styles.algorand}>
                    <a
                        href={algorandUrl}
                        target={'_blank'}
                        rel={'noreferrer'}>
                        <Image
                            src="/images/algorand-logo-white.png"
                            layout={'fill'}
                            objectFit={'contain'}
                            alt='Algorand' />
                    </a>
                </div>
            </div>
            <div className={styles.sub}>
                <a
                    href={algorandUrl}
                    target={'_blank'}
                    rel={'noreferrer'}>
                    {strings.carbonNegativeBlockchain}
                </a>
            </div>
        </Section>
    )
}