import Head from 'next/head'

const Custom404 = () => {
    return (
        <>
            <Head>
                <title>ページが見つかりません</title>
                <meta name="description" content={'ページが見つかりません'} />
            </Head>
            <h1>404 - Page Not Found</h1>
        </>
    )
}

export default Custom404
