import styles from './text-link.module.scss'

export default function TextLink({ targetUrl, text }) {
    return (
        <a
            className={styles.link}
            href={targetUrl}
            target={'_blank'}
            rel={'noreferrer'}>
            {text}
        </a>
    )
}