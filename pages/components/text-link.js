import ExternalLink from './external-link'
import styles from './text-link.module.scss'

export default function TextLink({ targetUrl, text }) {
    return (
        <ExternalLink
            className={styles.link}
            targetUrl={targetUrl}>
            {text}
        </ExternalLink>
    )
}