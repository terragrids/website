import styles from './anchor.module.scss'

export default function Anchor({ id }) {
    return (
        <a className={styles.main} id={id} />
    )
}