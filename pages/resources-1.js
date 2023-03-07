/*===== Components =====*/
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteData } from '@components/layout'
import DragDrop from '@components/DragDrop'
import DoorSection from '@components/DoorSection'
import DynamicHeader from '@components/DynamicHeader'
import DynamicFooter from '@components/DynamicFooter'
import DoorBG from '@components/SVGComponents/DoorBG'

/*===== Styles =====*/
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
                    
          <section className={pageStyles.mainSection}>
            <DoorBG resources/>
          </section>
        </div>

        <DynamicFooter
          dynamicText=""
        />
      </div>
            
    </Layout>
  )
}


