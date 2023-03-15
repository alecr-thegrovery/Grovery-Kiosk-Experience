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
import BlockQuote from '@components/ContentComponents/BlockQuote'
import PdfThumbnail from '@components/ContentComponents/PdfThumbnail'
import QRCodePreset from "@components/ContentComponents/QRCodePreset";

/*===== Styles =====*/
import utilStyles from '@styles/utils.module.css'
import pageStyles from '@styles/pages.module.scss'

let title = "Options To Enroll";
let footerText = "";

export default function Post({ postData }) {
  return (
    <Layout>
      
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
          <section className={pageStyles.mainSection}>
            <ComputerFrame frame="1">
              {/*Inner Page Content*/}

              <div className={pageStyles.twoColumn}>
                {/*LEFT CELL*/}
                <div className={pageStyles.cell}>
                  
                  <BlockQuote icon="/images/icons/contentFormIcon.svg">
                    <p>Obtain enrollment forms at BMSAccessSupport.com, under the Enrollment tab. Tap for information on how to complete the enrollment form >.</p>
                  </BlockQuote>

                  <h2>The provider portal allows you to: </h2>
                  <ul>
                    <li>Access case status updates </li>
                    <li>Enroll in co-pay program and view details, including eligibility dates, annual benefit cap, and available balance</li>
                    <li>Submit and track reverification status </li>
                    <li>Use e-signature for simplified processing </li>
                    <li>Securely message your regional Patient Access Specialist</li>
                  </ul>
                  <br/>
                  <QRCodePreset 
                    link="https://www.youtube.com/watch?v=nM4okRvCg2g"
                    toolTipText="Scan to visit Provider Portal"
                    toolTipPlacement="right"
                  />
                  
                </div>               

                {/*RIGHT CELL*/}
                <div className={pageStyles.cell} data-centered>
                  <PdfThumbnail/>
                </div>

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


