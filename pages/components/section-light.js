import { concat } from '../../utils/arrays'
import Section from './section'
import styles from './section-light.module.scss'

export default function LightSection({ children, classNames }) {
    return (
        <Section classNames={concat(styles.container, classNames)}>{children}</Section>
    )
}