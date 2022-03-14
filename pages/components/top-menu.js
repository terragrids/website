import { useState } from 'react'
import { strings } from '../../strings/en'
import { links } from '../../utils/links'
import ExternalLink from './external-link'
import styles from './top-menu.module.scss'

export default function TopMenu() {
    const [menuOpen, setMenuOpen] = useState(false)

    function openToggleMenu() {
        setMenuOpen(true)
    }

    function closeToggleMenu() {
        setMenuOpen(false)
    }

    function getMenuItems() {
        return (
            <>
                <li><a href={'#mission'}>{strings.mission}</a></li>
                <li><a href={'#roadmap'}>{strings.roadmap}</a></li>
                <li><ExternalLink targetUrl={links.whitepaper}>{strings.whitepaper}</ExternalLink></li>
                <li><ExternalLink className={styles.nohover} targetUrl={links.github}><i className={'icon-github'} /></ExternalLink></li>
            </>
        )
    }

    return (
        <nav>
            <ul className={styles.horizontal}>
                {getMenuItems()}
            </ul>
            <div className={styles.vertical}>
                <div className={`${styles.toggleMenu} ${styles.icon} icon-menu ${menuOpen ? styles.hidden : styles.visible}`} onClick={openToggleMenu} />
                <div className={`${styles.toggleClose} ${styles.icon} icon-cross ${menuOpen ? styles.visible : styles.hidden}`} onClick={closeToggleMenu} />
                <ul className={`${styles.list} ${menuOpen ? styles.visible : styles.hidden}`} onClick={closeToggleMenu}>
                    {getMenuItems()}
                </ul>
            </div>
        </nav>
    )
}