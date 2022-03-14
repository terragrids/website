import { strings } from '../../strings/en'
import styles from './decentralized.module.scss'
import LightSection from './section-light'

export default function Decentralized() {
    const githubUrl = 'https://github.com/terragrids'
    return (
        <LightSection>
            <h2>{strings.decentralized}</h2>
            <p>{strings.decentralizedContent}</p>
            <div className={styles.github}>
                <a className={styles.iconLink}
                    href={githubUrl}
                    target={'_blank'}
                    rel={'noreferrer'}>
                    <i className={`icon-github ${styles.icon}`} />
                </a>

                <p>
                    <a className={styles.githubLink}
                        href={githubUrl}
                        target={'_blank'}
                        rel={'noreferrer'}>
                        {strings.buildOnGithub}
                    </a>
                </p>

            </div>
            <p />
        </LightSection>
    )
}