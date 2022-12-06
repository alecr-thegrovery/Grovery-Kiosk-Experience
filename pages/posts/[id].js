import Layout, { siteData } from '@components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import Container from '@components/Container'

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title} | {siteData.siteTitleBase}</title>
      </Head>
      <Container>
        <article>

          {/*Header Section*/}
          <div className="header">
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <p>
              {postData.subTitle}
            </p>
          </div>
          
          {/*Content Section*/}
          <div className="postContent">
            
            <div className="cell" data-cell="text">
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </div>

            <div className="cell" data-cell="assets">
              [ASSETS]
            </div>

          </div>

          

        </article>
      </Container>
    </Layout>
  )
}


