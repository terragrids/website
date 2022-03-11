import { concat } from '../../utils/arrays'
import Section from './section'
import styles from './section-dark.module.scss'

export default function DarkSection({ children, classNames }) {
    return (
        <Section classNames={concat(styles.container, classNames)}>{children}</Section>
    )
}