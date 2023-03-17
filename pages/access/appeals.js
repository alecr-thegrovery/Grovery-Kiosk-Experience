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

let title = "Prior Authorization & Appeals Support";
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
          heading={["Prior Authorization & Appeals Support"]}
        />

        {/*Content*/}
        <div className={pageStyles.pageLevel3}>          
          <section className={pageStyles.mainSection}>
            <ComputerFrame frame="1">
              {/*Inner Page Content*/}

              <div className={pageStyles.twoColumn}>
                {/*LEFT CELL*/}
                <div className={pageStyles.cell}>
                  
                  <BlockQuote icon="/images/icons/contentListIcon.svg">
                  <h2>Prior Authorization (PA)</h2>
                  <h2>If required in the Benefits Review, our team can:</h2>
                  <ul>
                    <li>Help obtain plan-specific PA forms and understand PA requirements</li>
                    <li>Track PAs and follow up with payer</li>
                  </ul>
                  </BlockQuote>

                  <h2>Or you can obtain payer requirement information through the BMS Access Map at BMSAccessSupport.com:</h2>
                  <ul>
                    <li>Get on-demand access to coverage policies and formulary status for select BMS medications within local health plans</li>
                    <li>View utilization management criteria, including PA and documentation requirements, diagnostic testing information, etc.</li>
                  </ul>

                  <BlockQuote icon="/images/icons/contentClipboardIcon.svg">
                  <h2>Appeals Support</h2>
                  <p>Get helpful information, forms, and other resources regarding the appeals process, including:</p>
                  </BlockQuote>
                  
                  <ul>
                    <li>Medical necessity letter template and checklist</li>
                    <li>Claim denial letters template</li>
                    <li>Appeals letter template</li>
                    <li>CMS forms and documents</li>
                    <li>
                      <a href="#">Tap to learn more about the provider portal</a>
                    </li>
                  </ul>
                  
                </div>               

                {/*RIGHT CELL*/}
                <div className={pageStyles.cell} data-centered>
                  <img src="/images/content/appeals-img.png" alt="" />
                  <p>To access the BMS Access Payer Map, scan the QR code below and select the appropriate medication.</p>
                  <QRCodePreset 
                    link="https://www.youtube.com/watch?v=nM4okRvCg2g"
                    toolTipText="Scan to visit BMS Access Payer Map"
                    toolTipPlacement="right"
                  />
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


