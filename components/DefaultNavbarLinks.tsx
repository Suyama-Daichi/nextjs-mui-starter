import Link from 'next/link'
import React, { FC } from 'react'
import styles from '../styles/Default.module.scss'

const DefaultNavbarLinks: FC = () => {
    return (
        <div>
            <Link className={styles.navbarLink} href="/blog">
                Blog
            </Link>
        </div>
    )
}

export default DefaultNavbarLinks
