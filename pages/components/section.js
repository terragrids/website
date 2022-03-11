import { concat } from '../../utils/arrays'
import styles from './section.module.scss'

export default function Section({ children, classNames }) {
    return (
        <div className={concat(styles.container, classNames).join(' ')}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}