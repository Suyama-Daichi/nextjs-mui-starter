import type { GetServerSideProps, NextPage } from 'next'
import React from 'react'

import Page from '../../components/Page'
import ErrorPage from 'next/error'
import styles from '../../styles/Blog.module.scss'
import Link from 'next/link'
import { formatPostDate } from '../../ui/Blog'
import { Mail, Twitter } from '@mui/icons-material'
import Image from 'next/image'
import { literals } from '../../ui/Literals'
import { defaultErrorHandler } from '../../ui/DefaultErrorHandler'

interface Post {
    title: string
    date: string
    preview: string
    bodyHtml: string
    tags: string
    picture: string
    pictureAttribution: string
}
interface Props {
    post?: Post
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    if (!context.params || !context.params['id']) {
        return {
            props: {},
        }
    }
    const postId = context.params['id']
    return import(`../../content/${postId}.json`)
        .then((d) => {
            return {
                props: {
                    post: d.default as Post,
                },
            }
        })
        .catch((e) => {
            defaultErrorHandler(e)
            return {
                props: {},
            }
        })
}

const BlogEntry: NextPage<Props> = ({ post }) => {
    if (!post) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <div>
            <style jsx global>{`
                .content a {
                    color: #0365a5;
                    text-decoration: none;
                    border-bottom: 1px solid #dfdfdf;
                    transition: all 300ms ease;
                }
                a:hover,
                a:focus {
                    border-bottom-color: currentColor;
                }
                code {
                    background-color: #eee;
                    line-height: 1;
                    border-radius: 2px;
                    padding: 1px;
                }
                code:not(.hljs) {
                    border: 1px solid #ddd;
                }
            `}</style>
            <Page
                title={post.title}
                description={post.preview}
                className={styles.mainContent}
            >
                <div className={styles.centeredSection}>
                    {post.picture ? (
                        <div className={styles.coverImage}>
                            <Image
                                src={post.picture}
                                alt={post.title}
                                width="1280"
                                height="860"
                                layout="intrinsic"
                            />
                            <p className={styles.postMetaInfo}>
                                {post.pictureAttribution}
                            </p>
                        </div>
                    ) : null}
                    <h1>{post.title}</h1>
                    <div className={styles.postMetaInfo}>
                        <p>
                            {formatPostDate(post.date)} {post.tags}
                        </p>
                        <hr className={styles.postMetaInfoSep} />
                    </div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: post.bodyHtml,
                        }}
                    />
                    <div className={styles.divRow}>
                        <Link href="/blog">
                            <Link className={styles.block} href={''}>
                                Show all posts
                            </Link>
                        </Link>
                        <p className={styles.block}> or get in touch:</p>
                        <Link href={literals.socials.twitter}>
                            <Link className={styles.block} href={''}>
                                <Twitter color="primary" />
                            </Link>
                        </Link>
                        <Link href={literals.socials.mailtoEmailInfo}>
                            <Link className={styles.block} href={''}>
                                <Mail color="primary" />
                            </Link>
                        </Link>
                    </div>
                </div>
            </Page>
        </div>
    )
}

export default BlogEntry
