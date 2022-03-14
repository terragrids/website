import { strings } from '../../strings/en'
import LightSection from './section-light'

export default function Mission() {
    return (
        <LightSection>
            <a id={'mission'} />
            <h2>{strings.ourMission}</h2>
            <p>{strings.whatIsTerragrids1}</p>
        </LightSection>
    )
}