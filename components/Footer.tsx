import React, { FC } from 'react'
import styles from '../styles/Footer.module.scss'
import Link from 'next/link'

import { DateTime } from 'luxon'
import { List, ListItem } from '@mui/material'
import { Mail, Twitter, Favorite, GitHub } from '@mui/icons-material'
import { literals } from '../src/ui/Literals'

const Footer: FC = () => {
    return (
        <div className={styles.footerContainer}>
            <List className={styles.list}>
                <ListItem className={styles.inlineBlock}>
                    <Link className={styles.block} href={'/imprint'}>
                        Imprint
                    </Link>
                </ListItem>
                <ListItem className={styles.inlineBlock}>
                    <Link className={styles.block} href={'/privacy'}>
                        Privacy Policy
                    </Link>
                </ListItem>
                <ListItem className={styles.inlineBlock}>
                    <Link
                        className={styles.block}
                        href={literals.socials.twitter}
                    >
                        <Twitter />
                    </Link>
                </ListItem>
                <ListItem className={styles.inlineBlock}>
                    <Link
                        className={styles.block}
                        href={literals.socials.github}
                    >
                        <GitHub />
                    </Link>
                </ListItem>
                <ListItem className={styles.inlineBlock}>
                    <Link
                        className={styles.block}
                        href={literals.socials.mailtoEmailInfo}
                    >
                        <Mail />
                    </Link>
                </ListItem>
            </List>
            <footer className={styles.footer}>
                &copy; {DateTime.now().year}, made with{' '}
                <Favorite className={styles.icon} /> by{' '}
                <Link href="https://growtogether.team">
                    https://growtogether.team
                </Link>
            </footer>
        </div>
    )
}

export default Footer
