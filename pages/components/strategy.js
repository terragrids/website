import { strings } from '../../strings/en'
import DarkSection from './section-dark'
import TextLink from './text-link'

export default function Strategy() {
    return (
        <DarkSection>
            <h2>{strings.howAreWeDoingThis}</h2>
            <p>{strings.whatIsTerragrids2}</p>
            <p>{strings.whatIsTerragrids3}</p>
            <TextLink
                text={`${strings.contributeToWhitePaper} →`}
                targetUrl={'https://docs.google.com/document/d/1OwmZQygSRglX0yo-dP-2Rm6QtfDTLabX6lHK24c4CR4/edit?usp=sharing'} />
            <p />
        </DarkSection>
    )
}