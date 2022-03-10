import { strings } from '../../strings/en'
import Section from './section'
import styles from './mission.module.scss'

export default function Mission() {
    return (
        <Section classNames={[styles.container]}>
            <h2>{strings.mission}</h2>
            <div>{strings.whatIsTerragrids}</div>
        </Section>
    )
}