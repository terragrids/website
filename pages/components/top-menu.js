import { useState } from 'react'
import { strings } from '../../strings/en'
import { links } from '../../utils/links'
import ExternalLink from './external-link'
import Logo from '../../public/images/logo+name.svg'
import styles from './top-menu.module.scss'
import { Link as SmoothScrollLink } from 'react-scroll'

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
                <li>
                    <SmoothScrollLink to={'mission'} smooth onClick={closeToggleMenu}>
                        {strings.mission}
                    </SmoothScrollLink>
                </li>
                <li>
                    <SmoothScrollLink to={'roadmap'} smooth onClick={closeToggleMenu}>
                        {strings.roadmap}
                    </SmoothScrollLink>
                </li>
                <li>
                    <ExternalLink targetUrl={links.whitepaper}>{strings.whitepaper}</ExternalLink>
                </li>
                <li>
                    <ExternalLink className={styles.nohover} targetUrl={links.twitter}>
                        <i className={'icon-twitter'} />
                    </ExternalLink>
                </li>
                <li>
                    <ExternalLink className={styles.nohover} targetUrl={links.discord}>
                        <i className={'icon-discord'} />
                    </ExternalLink>
                </li>
            </>
        )
    }

    return (
        <nav>
            <ul className={styles.horizontal}>{getMenuItems()}</ul>
            <div className={styles.vertical}>
                <div
                    className={`${styles.toggleMenu} ${styles.icon} icon-menu ${
                        menuOpen ? styles.hidden : styles.visible
                    }`}
                    onClick={openToggleMenu}
                />
                <div className={`${styles.list} ${menuOpen ? styles.visible : styles.hidden}`}>
                    <div
                        className={`${styles.toggleClose} ${styles.icon} icon-cross ${
                            menuOpen ? styles.visible : styles.hidden
                        }`}
                        onClick={closeToggleMenu}
                    />
                    <ul>{getMenuItems()}</ul>
                    <div className={styles.logo}>
                        <Logo />
                    </div>
                </div>
            </div>
        </nav>
    )
}
