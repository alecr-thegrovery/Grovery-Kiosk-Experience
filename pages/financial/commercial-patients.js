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

let title = "NEW AssistPoint Integration";
let footerText = "";

export default function Post({ postData }) {
  return (
    <Layout financial pageActionState="lvl-3">
      
      <Head>
        <title>{title} | {siteData.siteTitleBase}</title>
      </Head>
      <div className={pageStyles.pageLayout}>
        {/*Header*/}
        <DynamicHeader
          heading={[<strong>NEW</strong>, " AssistPoint Integration"]}
        />

        {/*Content*/}
        <div className={pageStyles.pageLevel3}>          
          <section className={pageStyles.mainSection}>
            <ComputerFrame frame="1">
              {/*Inner Page Content*/}

              <div className={pageStyles.twoColumn}>
                {/*LEFT CELL*/}
                <div className={pageStyles.cell}>
                  <p>The BMS Access Support Co-Pay Assistance Program offers financial assistance to eligible, commercially insured patients. </p>
                  <p className={pageStyles.italics}>
                   Please Note:  The program will cover the out-of-pocket expenses of the BMS product only. It does not cover the costs of any other healthcare provider charges or any other treatment costs. Patients may be responsible for non-drug-related, out-of-pocket costs, depending on their specific healthcare benefits.
                  </p>
                  <p className={pageStyles.italics}>
                    Restrictions apply. Please see full Terms and Conditions, including complete eligibility requirements. 
                  </p>
                  <p>
                    <a href="#">Terms and Conditions for Empliciti, Opdivo, Opdivo + Yervoy, Opdualag, &amp; Yervoy</a>
                    <br/><br/>
                    <a href="#">Terms and Conditions for Abraxane &amp; Reblozyl</a>
                  </p>

                </div>               

                {/*RIGHT CELL*/}
                <div className={pageStyles.cell} data-centered>
                  <PdfThumbnail name="A Guide to Electronic Benefits Reverification (eBRV) 2023"/>
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


