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

            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe
                    sandbox={'allow-scripts'}
                    src={
                        'https://player.vimeo.com/video/772409370?dnt=1&amp;h=44c17b75dd&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
                    }
                    frameBorder={'0'}
                    allow={'autoplay; fullscreen; picture-in-picture'}
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    title={'What is Terragrids?'}></iframe>
            </div>
            <script src={'https://player.vimeo.com/api/player.js'} async />
        </DarkSection>
    )
}
