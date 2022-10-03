import styles from './button.module.scss'

export default function Button({ text, targetUrl }) {
    return (
        <a href={targetUrl} target={'_blank'} className={styles.main} rel={'noreferrer'}>
            {text}
        </a>
    )
}
