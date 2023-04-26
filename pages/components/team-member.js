import Image from 'next/image'
import ParagraphMaker from './paragraph-maker'
import styles from './team-member.module.scss'

export default function TeamMember({ name, role, imageUrl, imageAlt, bio }) {
    return (
        <div className={styles.container}>
            <h3>{name}</h3>
            <h4>{role}</h4>
            <div className={styles.image}>
                <Image src={imageUrl} alt={imageAlt} layout={'fill'} objectFit={'contain'} />
            </div>
            <ParagraphMaker text={bio} />
        </div>
    )
}
