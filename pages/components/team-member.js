import Image from 'next/image'
import { strings } from '../../strings/en'
import ParagraphMaker from './paragraph-maker'
import styles from './team-member.module.scss'
import TextLink from './text-link'

export default function TeamMember({ name, role, imageUrl, imageAlt, bio, linkedInUrl }) {
    return (
        <div className={styles.container}>
            <h3>{name}</h3>
            <h4>{role}</h4>
            <div className={styles.image}><Image src={imageUrl} alt={imageAlt} layout={'fill'} objectFit={'contain'} /></div>
            <ParagraphMaker text={bio} />
            <footer>
                <TextLink
                    text={`${strings.linkedIn} →`}
                    targetUrl={linkedInUrl} />
            </footer>
        </div >
    )
}