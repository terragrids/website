import { strings } from '../../strings/en'
import Section from './section'

export default function Strategy() {
    return (
        <Section>
            <h2>{strings.howAreWeDoingThis}</h2>
            <p>{strings.whatIsTerragrids2}</p>
            <p>{strings.whatIsTerragrids3}</p>
        </Section>
    )
}