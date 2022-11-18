import Image from 'next/image.js'
import { strings } from '../../strings/en'
import { links } from '../../utils/links'
import ParagraphMaker from './paragraph-maker.js'
import LightSection from './section-light'
import TextLink from './text-link'
import styles from './governance.module.scss'

export default function Governance() {
    return (
        <LightSection>
            <h2>{strings.ecosystem}</h2>
            <ParagraphMaker text={strings.governanceContent1} />

            <div className={styles.ecosystemImage}>
                <Image
                    priority
                    src={'/images/ecosystem.png'}
                    layout={'fill'}
                    objectFit={'contain'}
                    alt={'splash image'}
                />
            </div>

            <TextLink text={`${strings.contributeToWhitePaper} →`} targetUrl={links.whitepaper} />
            <p />
            <p />
        </LightSection>
    )
}
