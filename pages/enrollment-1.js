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
    <Layout enrollment>
      
      <Head>
        <title>Enrollment | {siteData.siteTitleBase}</title>
      </Head>
      <div className={pageStyles.pageLayout}>
        <DynamicHeader
          heading="Enrolling in Bristol Myers Squibb (BMS) Access Support"
          subhead="Enrollment in BMS Access Support is required to get support for select, prescribed BMS medications. "
        />

        <div className={pageStyles.pageLevel1}>
                    
          <section className={pageStyles.mainSection}>
            <DoorBG/>
          </section>
        </div>

        <DynamicFooter
          dynamicText=""
        />
      </div>
            
    </Layout>
  )
}


