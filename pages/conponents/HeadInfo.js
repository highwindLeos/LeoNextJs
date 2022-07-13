import Head from 'next/head';

const HeadInfo = ({title, keyword, name, content}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta keyword={keyword} name={name} content={content} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

HeadInfo.defaultProps  ={
    title : 'Next.js in Leo Study',
    keyword : 'Next.js in Leo Study',
    name : 'Leo',
    content : 'Leo'
};

export default HeadInfo;