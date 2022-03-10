import Image from 'next/image'
import { strings } from '../../strings/en'
import Section from './section'
import styles from './footer.module.scss'

export default function Footer() {
    return (
        <Section classNames={[styles.container]}>
            <div className={styles.poweredBy}>
                {strings.poweredBy}
                <div className={styles.algorand}>
                    <Image
                        src="/images/algorand-logo-white.png"
                        layout={'fill'}
                        objectFit={'contain'}
                        alt='Algorand' />
                </div>
            </div>
        </Section>
    )
}