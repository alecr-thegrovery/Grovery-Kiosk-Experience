/*===== Components =====*/
import Head from 'next/head'
import Link from 'next/link'
import Date from '@components/date'
import Layout, { siteData } from '@components/layout'
import DesktopNav from '@components/DesktopNav'
import BlogPreview from '@components/BlogPreview'
import Container from '@components/Container'
import DragDrop from '@components/DragDrop'

/*===== Styles =====*/
import utilStyles from '@styles/utils.module.css'
import { getSortedPostsData } from '@lib/posts'

/*===== Posts Data =====*/
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
    <Layout home>
      
      <Head>
        <title>Home | {siteData.siteTitleBase}</title>
      </Head>

      <section>
        <Container>
          <DragDrop/>
        </Container>
      </section>

    </Layout>
  )
}


