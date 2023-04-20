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
import QRCodePreset from "@components/ContentComponents/QRCodePreset";

/*===== Styles =====*/
import utilStyles from '@styles/utils.module.css'
import pageStyles from '@styles/pages.module.scss'

let title = "Using the My BMS Cases Provider Portal";
//{["Using the My BMS Cases ", <strong>Provider Portal</strong>]}
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
          heading={["Using the My BMS Cases ", <strong>Provider Portal</strong>]}
        />

        {/*Content*/}
        <div className={pageStyles.pageLevel3}>  
          <TransitionScreen screen="3"/>             
          <section className={pageStyles.mainSection}>
            <ComputerFrame frame="1">
              {/*Inner Page Content*/}

              <div className={pageStyles.twoColumn}>
                {/*LEFT CELL*/}
                <div className={pageStyles.cell}>
                  
                  <BlockQuote icon="/images/icons/contentComputerScreen.svg">
                    <p>This secure provider portal offers convenient, on-demand access to patient reimbursement cases for select BMS medications.</p>
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
                  <img src="/images/content/provider-portal-img.png" alt="" />
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


