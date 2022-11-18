import { strings } from '../../strings/en'
import { links } from '../../utils/links'
import DarkSection from './section-dark'
import TextLink from './text-link'

export default function Strategy() {
    return (
        <DarkSection>
            <h2>{strings.howAreWeDoingThis}</h2>
            <p>{strings.whatIsTerragrids2}</p>
            <p>{strings.whatIsTerragrids3}</p>
            <p>{strings.whatIsTerragrids4}</p>
            <p>{strings.whatIsTerragrids5}</p>
            <TextLink text={`${strings.contributeToWhitePaper} →`} targetUrl={links.whitepaper} />
            <p />
        </DarkSection>
    )
}
