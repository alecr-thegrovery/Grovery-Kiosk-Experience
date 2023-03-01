/*===== Components =====*/
import Head from 'next/head'
import Link from 'next/link'
import Date from '@components/date'
import Layout, { siteData } from '@components/layout'
import DesktopNav from '@components/DesktopNav'
import BlogPreview from '@components/BlogPreview'
import Container from '@components/Container'
import DragDrop from '@components/DragDrop'
import ContentGrid from '@components/ContentGrid'
import DoorSection from '@components/DoorSection'
import DynamicHeader from '@components/DynamicHeader'
import DynamicFooter from '@components/DynamicFooter'

/*===== Styles =====*/
import utilStyles from '@styles/utils.module.css'
import pageStyles from '@styles/pages.module.scss'

/*===== Posts Data =====*/
import { getSortedPostsData } from '@lib/posts'
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

/*===== Page Content =====*/
export default function Home({ allPostsData }) {
  return (
    <Layout resources>
      
      <Head>
        <title>Patient Resources | {siteData.siteTitleBase}</title>
      </Head>
      <div className={pageStyles.pageLayout}>
        <DynamicHeader
          heading="Bristol Myers Squibb Access Support"
          subhead="Through financial assistance options, access and reimbursements support, and patient resources, we help your patients take a more active and informed role in their care."
        />

        <div className={pageStyles.pageLevel1}>
          <section className={pageStyles.headingSection}>
            <Container width="contentWidthXl">
              <h1>Resources</h1>
            </Container>
          </section>
          
          <section className={pageStyles.mainSection}>
            <DoorSection resources/>
          </section>
        </div>

        <DynamicFooter
          dynamicText=""
        />
      </div>
            
    </Layout>
  )
}


