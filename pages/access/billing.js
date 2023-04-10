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

let title = "Using the My BMS Cases Provider Portal";
//{["Using the My BMS Cases ", <strong>Provider Portal</strong>]}
let footerText = "";

export default function Post({ postData }) {
  return (
    <Layout access>
      
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
          <section className={pageStyles.mainSection}>
            <ComputerFrame frame="4">
              {/*Inner Page Content*/}

              <div className={pageStyles.twoColumn}>
                {/*LEFT CELL*/}
                <div className={pageStyles.cell}>

                  <h2>We offer product-specific Billing &amp; Coding resources for your healthcare office.</h2>
                  <ul>
                    <li><strong>Billing &amp; Coding Guides</strong> provide an overview of relevant product and diagnosis codes, dosing and administration, and general reimbursement information</li>
                    <li><strong>Online Code Search Tool</strong> allows providers to type in a keyword to find specific HCPCS, CPT, NDC, 5010, or ICD-10 code</li>
                    <li><strong>Sample Claim Forms</strong> call out where to enter important information on health insurance claim forms (e.g., drug name, dosing NDC information, diagnosis code, and HCPCS code)</li>
                  </ul>
                  <br/>
                  <QRCodePreset 
                    link="https://www.youtube.com/watch?v=nM4okRvCg2g"
                    toolTipText="Scan the QR code to access Reimbursement Guides available for all relevant products at BMSAccessSupport.com. "
                    toolTipPlacement="right"
                  />
                  
                </div>               

                {/*RIGHT CELL*/}
                <div className={pageStyles.cell} data-centered>
                  <img src="/images/content/billing-coding-medselector-img.png" alt="" />
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


