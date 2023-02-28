import Layout, { siteData } from '@components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import Container from '@components/Container'
import DynamicHeader from '@components/DynamicHeader'
import DynamicFooter from '@components/DynamicFooter'
import ComputerFrame from '@components/SVGComponents/ComputerFrame'

/*===== Styles =====*/
import utilStyles from '@styles/utils.module.css'
import pageStyles from '@styles/pages.module.scss'

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
      <div className={pageStyles.pageLayout}>
        {/*Header*/}
        <DynamicHeader
          heading={postData.title}
        />

        {/*Content*/}
        <div className={pageStyles.pageLevel3}>          
          <section className={pageStyles.mainSection}>
            <ComputerFrame>
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </ComputerFrame>            
          </section>
        </div>        

        {/*Footer*/}
        <DynamicFooter
          dynamicText={postData.footerText}
        />
      </div>
      
      
    </Layout>
  )
}


