import { strings } from '../../strings/en'
import { links } from '../../utils/links'
import ExternalLink from './external-link'
import styles from './top-menu.module.scss'

export default function TopMenu() {
    return (
        <ul className={styles.list}>
            <li><a href={'#mission'}>{strings.mission}</a></li>
            <li><a href={'#roadmap'}>{strings.roadmap}</a></li>
            <li><ExternalLink targetUrl={links.whitepaper}>{strings.whitepaper}</ExternalLink></li>
            <li><ExternalLink className={styles.nohover} targetUrl={links.github}><i className={'icon-github'} /></ExternalLink></li>
        </ul>
    )
}