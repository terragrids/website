import { strings } from '../../strings/en'
import { links } from '../../utils/links'
import LightSection from './section-light'
import TextLink from './text-link'

export default function Governance() {
    return (
        <LightSection>
            <h2>{strings.governance}</h2>
            <p>{strings.governanceContent1}</p>
            <p>{strings.governanceContent2}</p>
            <TextLink
                text={`${strings.contributeToWhitePaper} →`}
                targetUrl={links.whitepaper} />
            <p />
            <p />
        </LightSection>
    )
}