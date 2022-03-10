import styles from './section.module.scss'

export default function Section({ children, classNames }) {
    const concat = (...arrays) => [styles.container].concat(...arrays.filter(Array.isArray))

    return (
        <div className={concat(classNames).join(' ')}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}