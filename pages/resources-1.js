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

/*===== Styles =====*/
import utilStyles from '@styles/utils.module.css'

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
        <title>Home | {siteData.siteTitleBase}</title>
      </Head>
      
       <section>
        <Container width="contentWidthXl">
          <h1>Resources</h1>
        </Container>
      </section>
      
      <section>
        <DoorSection resources/>
      </section>
      
    </Layout>
  )
}


