import React, { FC, MouseEventHandler, ReactNode } from 'react'
import styles from '@styles/HeaderNavBar.module.scss'
import GridContainer from '@components/GridContainer'
import GridItem from '@components/GridItem'
import MainButton from '@components/MainButton'
import Link from 'next/link'
import { Typography } from '@mui/material'
import { literals } from '@/ui/Literals'

interface Props {
    onClick?: MouseEventHandler<HTMLButtonElement>
    navbarLinks?: ReactNode
}

const Header: FC<Props> = ({ onClick, navbarLinks }) => {
    return (
        <div className={styles.headerBackground}>
            <div className={styles.headerNavbar}>
                <Link className={styles.homeLink} href={'/'}>
                    <Typography
                        variant="h5"
                        color="inherit"
                        component="div"
                        className={styles.brand}
                    >
                        {literals.brand}
                    </Typography>
                </Link>

                <div className={styles.navbarLinks}>{navbarLinks}</div>
            </div>
            <div className={styles.alignContentCenter}>
                <GridContainer className={styles.headerContent}>
                    <GridItem
                        xs={12}
                        sm={12}
                        md={12}
                        className={styles.headingCell}
                    >
                        <div className={styles.heading}>
                            A starter project with a strong foundation
                        </div>
                    </GridItem>
                    <GridItem
                        xs={12}
                        sm={12}
                        md={12}
                        className={styles.description}
                    >
                        <div>
                            <ul>Up to date Next.js and Material UI project</ul>
                            <ul>A simple design, easy to extend</ul>
                            <ul>It includes a blog!</ul>
                            <ul>
                                Good technical foundation with tests and more
                            </ul>
                        </div>
                        <div className={styles.joinButton}>
                            <MainButton
                                color="error"
                                onClick={(e) => {
                                    if (onClick) {
                                        onClick(e)
                                    }
                                }}
                            >
                                Get started
                            </MainButton>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    )
}

export default Header
