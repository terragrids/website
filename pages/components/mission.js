import { strings } from '../../strings/en'
import LightSection from './section-light'

export default function Mission() {
    return (
        <LightSection>
            <h2>{strings.mission}</h2>
            <p>{strings.whatIsTerragrids1}</p>
        </LightSection>
    )
}