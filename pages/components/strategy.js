import { strings } from '../../strings/en'
import Section from './section'
import TextLink from './text-link'

export default function Strategy() {
    return (
        <Section>
            <h2>{strings.howAreWeDoingThis}</h2>
            <p>{strings.whatIsTerragrids2}</p>
            <p>{strings.whatIsTerragrids3}</p>
            <TextLink
                text={'View and contribute to the whitepaper →'}
                targetUrl={'https://docs.google.com/document/d/1OwmZQygSRglX0yo-dP-2Rm6QtfDTLabX6lHK24c4CR4/edit?usp=sharing'} />
        </Section>
    )
}