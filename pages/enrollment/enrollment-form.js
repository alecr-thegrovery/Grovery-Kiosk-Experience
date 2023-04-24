/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import { router } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import $ from 'jquery'
import Layout, { siteData } from '@components/layout'

import DynamicHeader from '@components/DynamicHeader'
import DynamicFooter from '@components/DynamicFooter'
import ComputerFrame from '@components/SVGComponents/ComputerFrame'
import TransitionScreen from '@components/SVGComponents/TransitionScreen'
import BlockQuote from '@components/ContentComponents/BlockQuote'
import PdfThumbnail from '@components/ContentComponents/PdfThumbnail'

/*===== Styles =====*/
import utilStyles from '@styles/utils.module.css'
import pageStyles from '@styles/pages.module.scss'

let title = "How to Complete the Enrollment Form";
let footerText = "";

export default function Post({ postData }) {
  return (
    <Layout enrollment pageActionState="lvl-3">
      
      <Head>
        <title>{title} | {siteData.siteTitleBase}</title>
      </Head>
      <div className={pageStyles.pageLayout}>
        {/*Header*/}
        <DynamicHeader
          heading={title}
        />

        {/*Content*/}
        <div className={pageStyles.pageLevel3}>          
          <TransitionScreen screen="2"/>     
          <section className={pageStyles.mainSection}>
            <ComputerFrame frame="2">
              {/*Inner Page Content*/}

              <div className={pageStyles.oneColumn}>                  
                  <BlockQuote icon="/images/icons/contentFormIcon.svg">
                    <p>Accurately complete the enrollment form, including the Patient Authorization and Agreement (PAA), to prevent processing delays.</p>
                  </BlockQuote>

                  <img src="/images/content/EnrollmentFormContentImage.png" alt="" />
              </div>

            </ComputerFrame>            
          </section>
        </div>        

        {/*Footer*/}
        <DynamicFooter
          dynamicText={footerText}
        />
      </div>
      
      
    </Layout>
  )
}


