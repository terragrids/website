import { strings } from '../../strings/en'
import styles from './team.module.scss'
import Anchor from './anchor'
import LightSection from './section-light'
import TeamMember from './team-member'

export default function Team() {
    const lorenzo = 'Lorenzo Polidori'
    const irene = 'Irene Silvino'

    return (
        <LightSection>
            <Anchor id={'team'} />
            <h2>{strings.team}</h2>
            <div className={styles.content}>
                <TeamMember
                    name={lorenzo}
                    role={strings.founderTech}
                    imageUrl={'/images/avatar.lorenzo.png'}
                    imageAlt={lorenzo}
                    bio={strings.lorenzoBio}
                />
                <TeamMember
                    name={irene}
                    role={strings.founderDesign}
                    imageUrl={'/images/avatar.irene.png'}
                    imageAlt={irene}
                    bio={strings.ireneBio}
                />
            </div>
        </LightSection>
    )
}
